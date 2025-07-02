'use client';

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
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

export default function NewPostPage() {
  const params = useParams();
  const router = useRouter();
  const teamId = params.id as string;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const team = teams[teamId];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    
    // 실제 구현에서는 여기서 API 호출을 통해 게시글을 저장합니다
    await new Promise(resolve => setTimeout(resolve, 1000)); // 시뮬레이션
    
    // 게시글 목록으로 돌아가기
    router.push(`/team/${teamId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href={`/team/${teamId}`}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {team.name}으로 돌아가기
              </Link>
            </div>
          </div>
          
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              새 게시글 작성
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {team.name}에서 팀원들과 소통해보세요
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label 
              htmlFor="title" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Content Input */}
          <div>
            <label 
              htmlFor="content" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              내용
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="게시글 내용을 입력하세요"
              rows={12}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Writing Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              💡 글쓰기 팁
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• 명확하고 구체적인 제목을 사용하세요</li>
              <li>• 팀원들이 이해하기 쉽게 설명해주세요</li>
              <li>• 질문이 있다면 구체적으로 작성해주세요</li>
              <li>• 코드나 링크가 있다면 함께 공유해주세요</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              * 게시글은 팀 멤버들에게 공개됩니다
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={`/team/${teamId}`}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                취소
              </Link>
              <button
                type="submit"
                disabled={!title.trim() || !content.trim() || isSubmitting}
                className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    작성 중...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    게시글 작성
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
} 