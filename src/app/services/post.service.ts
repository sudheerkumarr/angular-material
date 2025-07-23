import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // header
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // GET - All posts
  // http.get(url,{options})
  getAllPosts() {
    return this.http.get(`${this.baseUrl}/posts`, { headers: this.httpHeaders });
  }

  // DELETE - Delete post by id
  // http.delete(url)
  deletePost(id: number) {
    this.http.delete(`${this.baseUrl}/posts/${id}`);
    console.log("service - deletePost: ", id);
    console.log(`${this.baseUrl}/posts/${id}`);
  }

  // ADD - add post
  addPost(post) {
    const body = JSON.stringify(post);
    console.log("Service: addPost", post)
    return this.http.post(`${this.baseUrl}/posts`, body, { headers: this.httpHeaders });
  }

  // GET - by id
  getPostById(id) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  // UPDATE - update post
  updatePost(post) {
    let body = JSON.stringify(post);
    return this.http.put(`${this.baseUrl}/posts/${post.id}`, body, { headers: this.httpHeaders })
  }




}
