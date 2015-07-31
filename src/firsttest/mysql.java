package firsttest;
import java.sql.*;
public class mysql {
	protected String url="jdbc:sqlserver://182.92.162.3:1433;DatabaseName=自来水集团管控平台"; 
	protected String user="sa";
	protected String pwd="simp2014";
	protected Connection conn;
	public  mysql()
	{
		init();
	}
	public void init(){
		try{
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
			System.out.print("Successs loading mysql driver!");
		}catch(Exception e)
		{
			System.out.print("Error loading mysql driver!");
			e.printStackTrace();
		}
		try{
			conn=DriverManager.getConnection(url,user,pwd);
			System.out.print("Success connect to mysql!");
		}catch(SQLException e)
		{
			System.out.print("Error !");
		}
	}
	public int add(String name,String age) throws SQLException
	{
		PreparedStatement stmt=conn.prepareStatement("insert into PoolState (name,age) values(?,?)");
		stmt.setString(1, name);
		stmt.setString(2, age);
		stmt.execute();
		return 0;
	}
	public int queryUser(String name1,String name2) throws SQLException 
	{
		
		PreparedStatement stmt=conn.prepareStatement("select UserName from LoginUser where UserName = ? and Password = ?");
		stmt.setString(1,name1);
		stmt.setString(2,name2);
		ResultSet rt=stmt.executeQuery();

		if (rt.next()) {
			return 1;
		}
		else{
			return 0;
		}
	}
	public String query(String data,String db,String name1,String name2) throws SQLException
	{
		String result="";
		PreparedStatement stmt=conn.prepareStatement("select "+data+" from "+db+" where PoolID = ? and t = ?");
//		stmt.setString(1, data);
//		PreparedStatement stmt=conn.prepareStatement("select UserName from LoginUser where UserName = ? and Password = ?");
		stmt.setString(1,name1);
		stmt.setString(2,name2);
		ResultSet rt=stmt.executeQuery();

		while(rt.next())
		{
			result+=rt.getString(1);
		}

		return result;
	}
	
	public String queryY(String data,String db,String name1,String name2) throws SQLException
	{
		String result="";
		PreparedStatement stmt=conn.prepareStatement("select "+data+" from  YState where YID = ? and t = ?");
		stmt.setString(1,name1);
		stmt.setInt(2,Integer.parseInt(name2));
		ResultSet rt=stmt.executeQuery();

		while(rt.next())
		{
			result+=rt.getString(1);
		}

		return result;
	}

	public String queryPoolOnload(String name1,String name2) throws SQLException
	{
		String result="";
		PreparedStatement stmt=conn.prepareStatement("select Onload from PoolState where PoolID = ? and t = ?");
//		if(pram=="Onload"){
//			stringSql = "select Onload from PoolState where PoolID = ? and t = ?";
//		}
//		if(pram=="VNow"){
//			stringSql = "select VNow from PoolState where PoolID = ? and t = ?";
//		}
		
		stmt.setString(1,name1);
		stmt.setInt(2,Integer.parseInt(name2));
		ResultSet rt=stmt.executeQuery();

		while(rt.next())
		{
			result+=rt.getString(1);
		}
		return result;
	}
	public String queryPoolVNow(String name1,String name2) throws SQLException
	{
		String result="";
		PreparedStatement stmt=conn.prepareStatement("select VNow from PoolState where PoolID = ? and t = ?");
//		if(pram=="Onload"){
//			stringSql = "select Onload from PoolState where PoolID = ? and t = ?";
//		}
//		if(pram=="VNow"){
//			stringSql = "select VNow from PoolState where PoolID = ? and t = ?";
//		}
		
		stmt.setString(1,name1);
		stmt.setInt(2,Integer.parseInt(name2));
		ResultSet rt=stmt.executeQuery();

		while(rt.next())
		{
			result+=rt.getString(1);
		}
		return result;
	}
	/**
	 * 
	 * @param pram Onload or VNow
	 * @param name1	PoolID
	 * @param name2 t
	 * @return
	 * @throws SQLException
	 */
		public String queryYOnload(String name1,String name2) throws SQLException
		{
			String result="";
			PreparedStatement stmt=conn.prepareStatement("select Onload from YState where YID = ? and t = ?");
//			if(pram=="Onload"){
//				stringSql = "select Onload from YState where YID = ? and t = ?";
//			}
//			if(pram=="VNow"){
//				stringSql = "select VNow from YState where YID = ? and t = ?";
//			}
			
			stmt.setString(1,name1);
			stmt.setInt(2,Integer.parseInt(name2));
			ResultSet rt=stmt.executeQuery();

			while(rt.next())
			{
				result+=rt.getString(1);
			}
			return result;
		}
		public String queryYVNow(String name1,String name2) throws SQLException
		{
			String result="";

			PreparedStatement stmt=conn.prepareStatement("select VNow from YState where YID = ? and t = ?");
//			if(pram=="Onload"){
//			stringSql = "select Onload from YState where YID = ? and t = ?";
//			}
//			if(pram=="VNow"){
//			stringSql = "select VNow from YState where YID = ? and t = ?";
//			}
			
			stmt.setString(1,name1);
			stmt.setInt(2,Integer.parseInt(name2));
			ResultSet rt=stmt.executeQuery();

			while(rt.next())
			{
				result+=rt.getString(1);
			}
			return result;
		}
		public void closeConn() {
			  if(conn != null) {
				   try {
				    conn.close();
				   } catch(Exception e) {
				    e.printStackTrace();
				   }
				   conn = null;
				  }
		}
	
}
