# 팀 소통 게시판 (Team Communication Board)

깔끔하고 모던한 UI의 팀별 소통 게시판입니다. GitHub 스타일의 카드 기반 디자인을 채택했습니다.

## 🚀 주요 기능

- **팀별 게시판**: 6개 팀 (Frontend, Backend, Design, DevOps, Product, QA)
- **게시글 작성/조회**: 제목, 내용, 댓글 기능
- **실시간 검색**: 게시글 제목과 내용 검색
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **다크모드 지원**: 시스템 설정에 따른 자동 테마
- **상호작용**: 좋아요, 조회수, 댓글 수 표시

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📱 페이지 구성

### 메인 페이지 (`/`)
- 인기 팀 섹션 (인기 배지 표시)
- 전체 팀 목록 (카테고리별 구분)
- 팀별 멤버 수 및 최근 활동 시간 표시

### 팀 상세 페이지 (`/team/[id]`)
- 팀 정보 및 설명
- 게시글 목록 (좋아요, 조회수, 댓글 수 표시)
- 검색 기능
- 새 게시글 작성 버튼

### 게시글 작성 페이지 (`/team/[id]/post/new`)
- 제목 및 내용 입력 폼
- 글쓰기 팁 제공
- 실시간 유효성 검사

### 게시글 상세 페이지 (`/team/[id]/post/[postId]`)
- 게시글 전체 내용 표시
- 좋아요 기능
- 댓글 작성/조회 기능
- 작성자 및 작성 시간 표시

## 🎨 UI/UX 특징

- **GitHub 스타일**: 친숙하고 깔끔한 인터페이스
- **카드 기반 레이아웃**: 정보 구분이 명확
- **마이크로 인터랙션**: 호버 효과 및 트랜지션
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원
- **성능 최적화**: Next.js의 이미지 최적화 및 코드 스플리팅

## 🚀 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 🌐 Netlify 배포

### 자동 배포 (권장)
1. GitHub에 저장소 생성 및 푸시
2. [Netlify](https://app.netlify.com)에서 "New site from Git" 선택
3. GitHub 저장소 연결
4. 빌드 설정 확인 (자동 감지됨)
5. 배포 완료!

### 수동 배포
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --build

# 프로덕션 배포
netlify deploy --prod
```

## 📁 프로젝트 구조

```
team-board/
├── src/
│   └── app/
│       ├── page.tsx                    # 메인 페이지 (팀 목록)
│       ├── team/
│       │   └── [id]/
│       │       ├── page.tsx            # 팀 상세 페이지
│       │       └── post/
│       │           ├── new/
│       │           │   └── page.tsx    # 게시글 작성
│       │           └── [postId]/
│       │               └── page.tsx    # 게시글 상세
│       ├── layout.tsx                  # 레이아웃
│       └── globals.css                 # 전역 스타일
├── public/                             # 정적 파일
├── netlify.toml                        # Netlify 설정
└── package.json                        # 의존성 및 스크립트
```

## 🔮 향후 개선 계획

- [ ] 실제 백엔드 API 연동
- [ ] 사용자 인증 시스템
- [ ] 실시간 알림
- [ ] 파일 첨부 기능
- [ ] 게시글 카테고리/태그
- [ ] 관리자 대시보드
- [ ] PWA 지원

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

팀 소통이 더욱 원활해지기를 바랍니다! 🎉
