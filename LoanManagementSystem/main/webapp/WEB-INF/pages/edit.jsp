<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<div class="container">
		<h3>Edit your record here</h3>
				<div class="row">
			<div class="col-md-4">
				<form action="update" method="get">

					<div class="form-group">
						<label for="lbleid">Employee ID</label> <input type="text"
							class="form-control" id="lbleid" name="eid"
							placeholder="Enter EID" value="${param.eid}" readonly />
					</div>
					<div class="form-group">
						<label for="lblfname">First Name</label> <input type="text"
							class="form-control" id="lblfname" name="fname"
							placeholder="Enter Name" value="${param.fname}" />
					</div>
					<div class="form-group">
						<label for="lbllname">Last Name</label> <input type="text"
							class="form-control" id="lbllname" name="lname"
							placeholder="Enter Name" value="${param.lname}" />
					</div>
					<div class="form-check-inline">
						<fieldset>
						Gender:
							Male <input type="radio" name="gender" value="Male">

							Female <input type="radio" name="gender" value="Female">
						</fieldset>

					</div>
					<button type="submit" value="update"
						class="btn btn-primary">Update Employee</button>
				</form>
			</div>

		</div>

	</div>
</body>
</html>