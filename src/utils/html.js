export const preventAction = method => e => {
  method(e);
  e.preventDefault();
};

export const followLink = url => {
  const a = document.createElement('a');
  a.target = '_blank';
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const goToPage = (page = '', id, route = {}) => {
  return id
   ? route?.history?.push(`/${page}/${id}`)
   : route?.history?.push(`/${page}`);
};

