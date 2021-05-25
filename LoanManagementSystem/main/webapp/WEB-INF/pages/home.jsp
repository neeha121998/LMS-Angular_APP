<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	Home Page .....

	
	
	
	<input type="submit" value="Add Employee"
		onclick="window.location.href='register'" />
	<br>
	<br>
	<br> ${NOTIFICATION}
	
	
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>EID</th>
					<th>First NAME</th>
					<th>Last NAME</th>
					<th>Gender</th>
					<th>Email</th>
					<th colspan="2">Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="employee" items="${emplist}">
					<tr>
						<td><c:out value="${employee.eid}"></c:out></td>
						<td><c:out value="${employee.fname}"></c:out></td>
						<td><c:out value="${employee.lname}"></c:out></td>
						<td><c:out value="${employee.gender}"></c:out></td>
						<td><c:out value="${employee.email}"></c:out></td>
						<td><a href="edit?eid=${employee.eid}">EDIT</a></td>
						<td><a href="delete?eid=${employee.eid}">Delete</a></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>