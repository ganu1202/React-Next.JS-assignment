"use client"
import Link from "next/link";
import "./globals.css"
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount]=useState(0);
  useEffect(()=>{
    fetch("/api/users")
    .then(res=>res.json())
    .then(data=>setCount(data.result.length));
  },[])

  return (
    <div className="page-container">
      <h1>Welcome to user management system </h1>
        <p className="description">
          This system allows you to view, add, update, and delete user records using MongoDB and Next.js.
        </p>
      <nav className="navbar">
        <Link href="/users" className="nav-link">Users</Link>
        <Link href="/addUser"><button className="cta-button">Add User</button>
</Link>
      </nav>


      <p>Total Users:{count}</p>

    </div>
  );
}
