function openPatient() {
  const id = document.getElementById("searchId").value.trim();
  if (!id) {
    alert("Please enter a patient ID");
    return;
  }
  window.location.href = `patient.html?id=${encodeURIComponent(id)}`;
}