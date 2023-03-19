window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-success');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerText = 'Success! Anticipate our notification!';
        form.appendChild(alertDiv);
      })
    });
  });
