window.addEventListener("load", () => {
  const get = id => document.getElementById(id);
  const form = get("empForm");

  const getFormData = () => ({
    id: get("id").value.trim(),
    name: get("name").value.trim(),
    ext: get("ext").value.trim(),
    email: get("email").value.trim(),
    department: get("department").value
  });

  const validate = ({ id, ext }) => {
    if (id.length !== 8 || isNaN(id)) {
      console.error("Employee ID must be 8 digits.");
      return false;
    }
    if (ext.length !== 4 || isNaN(ext)) {
      console.error("Extension must be 4 digits.");
      return false;
    }
    return true;
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = getFormData();
    if (!validate(data)) return;
    console.log("Employee Added:");
    Object.entries(data).forEach(([key, value]) =>
      console.log(`${key.toUpperCase()}: ${value}`)
    );
  });
});