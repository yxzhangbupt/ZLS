<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 

    <% request.setCharacterEncoding("utf-8"); %>

    <% 
    	mysql data=new mysql();
    	String YVNow=data.queryYVNow(request.getParameter("id"), request.getParameter("t"));
    	 /* String json = "{ h:da,str:'111'}"; */
    	 
    	out.print(data.queryYVNow(request.getParameter("id"), request.getParameter("t")));
    	data.closeConn();
    %>

    

