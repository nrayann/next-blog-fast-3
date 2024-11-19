"use client"
import { useState, useEffect } from "react";

export default function BlogPost({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-20">
      {data ? (
        <p>
          <h1 className="text-2xl">Blog Post id: {data.id}</h1>
          <p className="text-xl">Este é o título do Post: {data.title}.</p>
          <p className="text-lg">Este é o conteúdo do Post: {data.body}.</p>
        </p>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}