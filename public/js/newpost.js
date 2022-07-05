const postFormHandler = async (event) => {
    event.preventDefault();
  

    const subject = document.getElementById('subject-box').getAttribute("name");
    // const 
    if (subject === 'project_subject') {
      console.log('project_subject');
      const project_name = document.getElementById('title-input').value.trim();
      const project_description = document.getElementById('description-input').value.trim();
      const response = await fetch('/api/newpost/project', {
        method: 'POST',
        body: JSON.stringify({ project_name, project_description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/project');
      } else {
        alert('Failed to post project.');
      }
    } else {
      console.log('discussion_subject');
      const discussion_title = document.getElementById('title-input').value.trim();
      const discussion_description = document.getElementById('description-input').value.trim();
      const response = await fetch('/api/newpost/discussion', {
        method: 'POST',
        body: JSON.stringify({ discussion_title, discussion_description}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/discussion');
      } else {
        alert('Failed to post discussion.');
      }
    }  
  };
  
  document
    .getElementById('post-form')
    .addEventListener('submit', postFormHandler);