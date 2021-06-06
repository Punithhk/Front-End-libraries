async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

// Sending Data with a request
fetch("/create/user", {
  method: "POST",
  body: JSON.stringify({ username, password, bio }),
});

// Uploading files with Fetch
const formData = new FormData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");
forData.append("avatar", imgFile);
fetch("/create/user", {
  method: "POST",
  body: formData,
});

// Authorised Req
fetch(`https://api.github.com/users/${login}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
