<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 

    <% request.setCharacterEncoding("utf-8"); %>

    <% 
    	mysql data1=new mysql();
    	String da1 = data1.query(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID1"),request.getParameter("t1"));
    	String da2 = data1.query(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID2"),request.getParameter("t2"));
    	String da3 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID3"),request.getParameter("t3"));
    	String da4 = data1.queryY(request.getParameter("data"), request.getParameter("db"),request.getParameter("PoolID4"),request.getParameter("t4"));
    	
		String result="{Onload1:"+da1+",Onload2:"+da2+",Onload3:"+da3+",Onload4:"+da4+"}";
		System.out.println(result);
		data1.closeConn();
    	out.print(result);
    %>

    

