export const postUser = (user) =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });

export const postSession = (user) =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });

export const deleteSession = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE",
  });

// user ={username: 'tommy', password: '1234567'}

$.ajax({
  url: "/api/users",
  method: "POST",
  data: { user },
});
