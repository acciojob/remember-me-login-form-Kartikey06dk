function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('checkbox').checked;
      
      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      
      alert('Logged in as ' + username);
    }
    
    // Function to handle "Login as existing user" button click
    function handleExistingUserLogin() {
      const username = localStorage.getItem('username');
      alert('Logged in as ' + username);
    }
  
    // Check if there are saved details
    // const savedUsername = localStorage.getItem('username');
    // if (savedUsername) {
    //   const existingButton = document.getElementById('existing');
    //   existingButton.style.display = 'inline-block';
    // }
 