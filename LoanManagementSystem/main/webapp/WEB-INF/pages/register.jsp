<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Employee</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
</head>
<body>

	<div class="container">
		<h3>Employee Management System</h3>
		<a href="login">Login here</a>

		<div class="row">
			<div class="col-md-4">
				<form action="register" method="post">

					
					<div class="form-group">
						<label for="lblfname">First Name</label> <input type="text"
							class="form-control" id="lblfname" name="txtfname"
							placeholder="Enter First Name" />
					</div>
					<div class="form-group">
						<label for="lbllname">Last Name</label> <input type="text"
							class="form-control" id="lbllname" name="txtlname"
							placeholder="Enter Last Name" />
					</div>


					<div class="form-check-inline">
						<fieldset>
							Male <input type="radio" name="txtgender" value="Male">

							Female <input type="radio" name="txtgender" value="Female">

						</fieldset>

					</div>


					<div class="form-group">
						<label for="lblname">Email</label> <input type="text"
							class="form-control" id="lblemail" name="txtemail"
							placeholder="Enter Email" />
					</div>

					<button type="submit" class="btn btn-primary">Register
						Employee</button>
				</form>
			</div>

		</div>

	</div>


</body>
</html>