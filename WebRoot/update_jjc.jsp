<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 

    <% request.setCharacterEncoding("utf-8"); %>

    <% 
    	mysql data1=new mysql();
    	String da1 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID"),request.getParameter("t"));
    	String da2 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID"),request.getParameter("t"));
    	String da3 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID"),request.getParameter("t"));

    	
		String result="{Onload1:"+da1+",Onload2:"+da2+",Onload3:"+da3+"}";
		System.out.println(da1+" second: "+request.getParameter("t"));
		

    	out.print(result);
    %>

    

