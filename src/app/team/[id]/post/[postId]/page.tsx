'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Heart, Eye, MessageCircle, Clock, User, Send } from "lucide-react";
import { useState } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  views: number;
  replies: number;
}

interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
}

const teams: Record<string, Team> = {
  frontend: {
    id: "frontend",
    name: "Frontend Team",
    description: "React, Next.js, TypeScript 개발 및 UI/UX 논의",
    memberCount: 12,
    category: "Development"
  },
  backend: {
    id: "backend", 
    name: "Backend Team",
    description: "API 개발, 데이터베이스 설계 및 서버 아키텍처",
    memberCount: 8,
    category: "Development"
  },
  design: {
    id: "design",
    name: "Design Team",
    description: "UI/UX 디자인, 브랜딩, 프로토타이핑",
    memberCount: 6,
    category: "Design"
  },
  devops: {
    id: "devops",
    name: "DevOps Team",
    description: "CI/CD, 인프라 관리, 모니터링 및 배포",
    memberCount: 4,
    category: "Operations"
  },
  product: {
    id: "product",
    name: "Product Team",
    description: "제품 기획, 로드맵 수립, 시장 분석",
    memberCount: 5,
    category: "Strategy"
  },
  qa: {
    id: "qa",
    name: "QA Team",
    description: "품질 보증, 테스트 자동화, 버그 추적",
    memberCount: 3,
    category: "Quality"
  }
};

const samplePosts: Record<string, Record<string, Post>> = {
  frontend: {
    "1": {
      id: "1",
      title: "Next.js 14의 새로운 기능들에 대해 논의해요",
      content: `안녕하세요! Next.js 14가 출시되면서 정말 많은 변화가 있었는데요, 특히 App Router와 Server Components 부분에서 큰 개선이 있었습니다.

주요 변경사항:
1. **App Router 안정화**: Pages Router에서 App Router로의 완전한 전환
2. **Server Components 개선**: 성능 최적화와 더 나은 개발 경험
3. **Turbopack 통합**: 더 빠른 빌드와 개발 서버
4. **이미지 최적화**: Next/Image 컴포넌트의 성능 향상

여러분들은 App Router 사용하면서 어떤 경험을 하셨나요? 특히 기존 Pages Router에서 마이그레이션 하시면서 겪은 이슈나 팁들을 공유해주시면 좋겠습니다!

그리고 Server Components를 실제 프로덕션에서 사용해보신 분들의 후기도 궁금합니다. 성능상 이점을 체감하셨는지, 아니면 아직 안정성 면에서 우려되는 부분이 있는지 등등요.`,
      author: "김개발",
      createdAt: "2024-01-15T10:30:00Z",
      likes: 15,
      views: 142,
      replies: 8
    },
    "2": {
      id: "2", 
      title: "TypeScript 5.0 마이그레이션 가이드",
      content: "프로젝트를 TypeScript 5.0으로 업그레이드하면서 겪은 이슈들을 공유합니다.",
      author: "이타입",
      createdAt: "2024-01-14T15:20:00Z",
      likes: 23,
      views: 203,
      replies: 12
    },
    "3": {
      id: "3",
      title: "Tailwind CSS vs Styled Components",
      content: "각각의 장단점과 프로젝트에 어떤 것이 더 적합한지 의견을 나눠요.",
      author: "박스타일",
      createdAt: "2024-01-13T09:15:00Z",
      likes: 31,
      views: 287,
      replies: 19
    }
  }
};

const sampleComments: Record<string, Comment[]> = {
  "frontend-1": [
    {
      id: "1",
      content: "정말 유용한 정보네요! 저희도 App Router로 마이그레이션을 계획 중인데, 혹시 가장 큰 어려움이 무엇이었는지 궁금합니다.",
      author: "최리액트",
      createdAt: "2024-01-15T11:00:00Z",
      likes: 3
    },
    {
      id: "2",
      content: "Server Components 사용해보니 확실히 초기 로딩 속도가 개선되더라고요. 다만 클라이언트 상태 관리 부분에서 좀 헷갈리는 부분이 있었습니다.",
      author: "박컴포넌트",
      createdAt: "2024-01-15T11:30:00Z",
      likes: 5
    },
    {
      id: "3",
      content: "Turbopack 정말 빨라졌네요! 개발 서버 시작 시간이 절반으로 줄었습니다 👍",
      author: "김터보",
      createdAt: "2024-01-15T12:15:00Z",
      likes: 7
    }
  ]
};

export default function PostDetailPage() {
  const params = useParams();
  const teamId = params.id as string;
  const postId = params.postId as string;
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const team = teams[teamId];
  const post = samplePosts[teamId]?.[postId];
  const comments = sampleComments[`${teamId}-${postId}`] || [];

  if (!team || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            게시글을 찾을 수 없습니다
          </h1>
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}일 전`;
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    
    // 실제 구현에서는 여기서 API 호출
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setNewComment("");
    setIsSubmitting(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href={`/team/${teamId}`}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {team.name}으로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Post */}
        <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  {team.category}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {post.views}
                </div>
              </div>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            {/* Post Meta */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 space-x-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {formatDate(post.createdAt)}
              </div>
            </div>

            {/* Post Content */}
            <div className="prose dark:prose-invert max-w-none mb-6">
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments.length}개의 댓글</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              댓글 {comments.length}개
            </h2>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <div className="mb-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 작성해주세요..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newComment.trim() || isSubmitting}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  댓글 작성
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <div className="text-center py-8">
                  <MessageCircle className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">
                    아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
                  </p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {comment.author}
                        </span>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(comment.createdAt)}
                        </div>
                      </div>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-3 h-3" />
                        <span className="text-xs">{comment.likes}</span>
                      </button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {comment.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 