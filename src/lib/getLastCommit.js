export async function getLastCommit() {
    const response = await fetch('https://api.github.com/repos/yumobennyyang/portfolio-website/commits');
    const data = await response.json();
    return data[0].commit.committer.date;
  }