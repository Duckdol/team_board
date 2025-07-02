'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Plus, Search, MessageCircle, Heart, Eye, Clock, User } from "lucide-react";
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

const samplePosts: Record<string, Post[]> = {
  frontend: [
    {
      id: "1",
      title: "Next.js 14의 새로운 기능들에 대해 논의해요",
      content: "App Router와 Server Components의 장단점에 대해 이야기해봅시다.",
      author: "김개발",
      createdAt: "2024-01-15T10:30:00Z",
      likes: 15,
      views: 142,
      replies: 8
    },
    {
      id: "2", 
      title: "TypeScript 5.0 마이그레이션 가이드",
      content: "프로젝트를 TypeScript 5.0으로 업그레이드하면서 겪은 이슈들을 공유합니다.",
      author: "이타입",
      createdAt: "2024-01-14T15:20:00Z",
      likes: 23,
      views: 203,
      replies: 12
    },
    {
      id: "3",
      title: "Tailwind CSS vs Styled Components",
      content: "각각의 장단점과 프로젝트에 어떤 것이 더 적합한지 의견을 나눠요.",
      author: "박스타일",
      createdAt: "2024-01-13T09:15:00Z",
      likes: 31,
      views: 287,
      replies: 19
    }
  ],
  backend: [
    {
      id: "1",
      title: "GraphQL vs REST API 성능 비교",
      content: "실제 프로덕션 환경에서의 성능 측정 결과를 공유합니다.",
      author: "서버왕",
      createdAt: "2024-01-15T14:45:00Z",
      likes: 28,
      views: 156,
      replies: 15
    },
    {
      id: "2",
      title: "마이크로서비스 아키텍처 구현 경험담",
      content: "모놀리스에서 마이크로서비스로 전환하면서 배운 점들을 정리했습니다.",
      author: "최아키",
      createdAt: "2024-01-14T11:30:00Z",
      likes: 42,
      views: 324,
      replies: 23
    }
  ],
  design: [
    {
      id: "1",
      title: "2024년 UI/UX 트렌드 정리",
      content: "올해 주목할 만한 디자인 트렌드들을 모아봤습니다.",
      author: "디자인러",
      createdAt: "2024-01-15T16:20:00Z",
      likes: 35,
      views: 278,
      replies: 17
    }
  ],
  devops: [
    {
      id: "1",
      title: "Kubernetes 클러스터 모니터링 설정",
      content: "Prometheus와 Grafana를 이용한 모니터링 구축 가이드입니다.",
      author: "운영신",
      createdAt: "2024-01-15T13:10:00Z",
      likes: 19,
      views: 145,
      replies: 9
    }
  ],
  product: [
    {
      id: "1",
      title: "Q1 로드맵 리뷰 및 Q2 계획",
      content: "1분기 성과를 돌아보고 2분기 계획을 세워봅시다.",
      author: "기획짱",
      createdAt: "2024-01-15T12:00:00Z",
      likes: 12,
      views: 89,
      replies: 6
    }
  ],
  qa: [
    {
      id: "1",
      title: "자동화 테스트 커버리지 향상 방안",
      content: "현재 70%인 테스트 커버리지를 90%까지 올리는 방법을 논의해요.",
      author: "테스터",
      createdAt: "2024-01-15T11:45:00Z",
      likes: 8,
      views: 67,
      replies: 4
    }
  ]
};

export default function TeamPage() {
  const params = useParams();
  const teamId = params.id as string;
  const [searchTerm, setSearchTerm] = useState("");
  
  const team = teams[teamId];
  const posts = samplePosts[teamId] || [];
  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            팀을 찾을 수 없습니다
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                팀 목록으로
              </Link>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {team.name}
                  </h1>
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    {team.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {team.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                  <User className="w-4 h-4 mr-1" />
                  {team.memberCount}명의 멤버
                </div>
              </div>
              
              <Link
                href={`/team/${teamId}/post/new`}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                새 게시글
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="게시글 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {searchTerm ? "검색 결과가 없습니다" : "아직 게시글이 없습니다"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm ? "다른 키워드로 검색해보세요" : "첫 번째 게시글을 작성해보세요!"}
              </p>
              {!searchTerm && (
                <Link
                  href={`/team/${teamId}/post/new`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  게시글 작성하기
                </Link>
              )}
            </div>
          ) : (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/team/${teamId}/post/${post.id}`}
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                        <span>{post.author}</span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.replies}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
} 