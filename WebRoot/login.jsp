<%-- <%@page import="sun.org.mozilla.javascript.internal.json.JsonParser"%> --%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 
	<% request.setCharacterEncoding("utf-8"); %>
	<%
		mysql data1=new mysql();

		int da=data1.queryUser(request.getParameter("name"),request.getParameter("pwd"));
//  		out.print(da);
		if(da==1)
		{
			String json="{status:'Success',title:'on'}";
			response.getWriter().write(json);
// 			out.print(json);
		}
		else{
			String json="{status:'fail',title:'off'}";
			response.getWriter().write(json);
// 			out.print(json);
		}
	 %>

