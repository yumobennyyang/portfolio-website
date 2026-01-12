'use client';

import { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import ProjectView from '../../components/ProjectView';
import Modal from '../../components/Modal';
import { useNavigationContext } from '../../components/NavigationContext';

export default function PlayPage() {
  const { expandedProjectId, setExpandedProjectId } = useNavigationContext();
  const [showProjectView, setShowProjectView] = useState(false);

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
            category="play"
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
