<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 

    <% request.setCharacterEncoding("utf-8"); %>

    <% 
    	mysql data1=new mysql();
    	String da1 = data1.query(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID1"),request.getParameter("t1"));
    	String da2 = data1.query(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID1"),request.getParameter("t1"));
    	String da3 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID2"),request.getParameter("t2"));

    	
		String result="{Onload1:"+da1+",Onload2:"+da2+",Onload3:"+da3+"}";
		System.out.println(result);

    	out.print(result);
    %>

