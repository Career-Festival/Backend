// src/components/home/Community.jsx
import React from 'react';

const Community = () => {
  // 예시 데이터 (커뮤니티 게시물 목록)
  const communityPosts = [
    { id: 1, title: '오늘의 행사 후기', author: '사용자1', date: '2024-02-15' },
    { id: 2, title: 'IT 기술 세미나 공유', author: '사용자2', date: '2024-03-10' },
    { id: 3, title: '디자인 워크샵 후기', author: '사용자3', date: '2024-04-05' },
  ];

  return (
    <div>
      <h3>커뮤니티</h3>
      <ul>
        {communityPosts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> by {post.author} - {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
