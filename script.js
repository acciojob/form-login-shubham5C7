function getFormvalue(e) {
    e.preventDefault();

	const FN = document.getElementById("fname").value.trim();
	const LN = document.getElementById("lname").value.trim();

const fullName = `${FN} ${LN}`;
	alert(fullName);
	
  document.getElementById("result").innerText = fullName;
}
