'use client';

import { useState, useEffect } from 'react';
import ProjectList from '../../components/ProjectList';
import { projects } from '../../data/projects';
import ProjectView from '../../components/ProjectView';
import Modal from '../../components/Modal';
import { useNavigationContext } from '../../components/NavigationContext';

export default function MakePage() {
  const { expandedProjectId, setExpandedProjectId } = useNavigationContext();
  const [showProjectView, setShowProjectView] = useState(false);

  // Helper to get slug from project title
  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // 1. On mount (and hash change), parse hash and open project
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const foundProject = projects.find(p => getProjectSlug(p.title) === hash);
        if (foundProject) {
          // Redirect if category doesn't match
          if (foundProject.category !== 'make') {
            window.location.replace(`/${foundProject.category}#${hash}`);
            return;
          }
          setExpandedProjectId(foundProject.id);
        }
      } else {
        setExpandedProjectId(null);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setExpandedProjectId]);

  // 2. When project state changes, update hash
  useEffect(() => {
    if (expandedProjectId) {
      const project = projects.find(p => p.id === expandedProjectId);
      if (project) {
        const slug = getProjectSlug(project.title);
        if (window.location.hash.slice(1) !== slug) {
            window.history.pushState(null, '', `#${slug}`);
        }
      }
    } else {
      if (window.location.hash) {
         window.history.pushState(null, '', window.location.pathname);
      }
    }
  }, [expandedProjectId]);

  const handleClose = () => {
    setExpandedProjectId(null);
  };

  return (
    <>
      <section className="bg-white z-0 w-screen h-auto">
        <div className="">
          <ProjectList 
            onSelect={setExpandedProjectId} 
            selectedProjectId={expandedProjectId} 
            category="make"
            showProjectView={showProjectView}
          />
        </div>
      </section>

      <div className="z-[9999999999999] !pointer-events-auto">
        <Modal isOpen={!!expandedProjectId} onClose={handleClose} selectedProjectId={expandedProjectId} onContentVisible={setShowProjectView}>
          {expandedProjectId && <ProjectView projectId={expandedProjectId} />}
        </Modal>
      </div>
    </>
  );
}
