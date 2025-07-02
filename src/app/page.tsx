'use client';

import Link from "next/link";
import { MessageCircle, Users, Clock, Star } from "lucide-react";

interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  lastActivity: string;
  category: string;
  isPopular?: boolean;
}

const teams: Team[] = [
  {
    id: "frontend",
    name: "Frontend Team",
    description: "React, Next.js, TypeScript 개발 및 UI/UX 논의",
    memberCount: 12,
    lastActivity: "2시간 전",
    category: "Development",
    isPopular: true
  },
  {
    id: "backend",
    name: "Backend Team", 
    description: "API 개발, 데이터베이스 설계 및 서버 아키텍처",
    memberCount: 8,
    lastActivity: "30분 전", 
    category: "Development",
    isPopular: true
  },
  {
    id: "design",
    name: "Design Team",
    description: "UI/UX 디자인, 브랜딩, 프로토타이핑",
    memberCount: 6,
    lastActivity: "1시간 전",
    category: "Design"
  },
  {
    id: "devops",
    name: "DevOps Team",
    description: "CI/CD, 인프라 관리, 모니터링 및 배포",
    memberCount: 4,
    lastActivity: "3시간 전",
    category: "Operations"
  },
  {
    id: "product",
    name: "Product Team",
    description: "제품 기획, 로드맵 수립, 시장 분석",
    memberCount: 5,
    lastActivity: "45분 전",
    category: "Strategy"
  },
  {
    id: "qa",
    name: "QA Team",
    description: "품질 보증, 테스트 자동화, 버그 추적",
    memberCount: 3,
    lastActivity: "4시간 전",
    category: "Quality"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                팀 소통 게시판
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                팀별로 소통하고 협업하는 공간입니다
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {teams.length}개 팀 활성화 중
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Popular Teams Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              인기 팀
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {teams.filter(team => team.isPopular).map((team) => (
              <Link
                key={team.id}
                href={`/team/${team.id}`}
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {team.name}
                      </h3>
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">
                        인기
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {team.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {team.memberCount}명
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {team.lastActivity}
                      </div>
                    </div>
                  </div>
                  <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Teams Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            모든 팀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Link
                key={team.id}
                href={`/team/${team.id}`}
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {team.category}
                  </span>
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {team.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {team.memberCount}명
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {team.lastActivity}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
