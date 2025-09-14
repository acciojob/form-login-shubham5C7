function getFormvalue() {
    e.preventDefault();

	const FN = document.getElementById("fname").value;
	const LN = document.getElementById("lname").value;

	document.getElementById("result").innerText=
		alter(`${FN}${LN}`);
	

}
