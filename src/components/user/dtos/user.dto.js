const single = (resource) => ({
  id: resource._id,
  name: resource.name,
  email: resource.email,
  online: resource.online,
});

module.exports = {
  single,
};
