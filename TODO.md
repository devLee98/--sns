# TODO

## 인증(auth)

- [ ] flash cookie 기반 에러 전달로 전환
  - 현재 `?error=` 쿼리스트링 사용으로 URL 변경 시 화면 깜빡임 발생
  - 대상: `src/actions/auth.ts`, `src/components/toast/auth-error-toast.tsx`, `src/app/signin/page.tsx`, `src/app/signup/page.tsx`

- [ ] 로그인/회원가입 제출 중 버튼 비활성화
  - `useFormStatus`를 사용해 중복 요청 방지 및 UX 개선
  - 대상: `src/app/signin/page.tsx`, `src/app/signup/page.tsx`

- [ ] 에러 발생 시 이메일/비밀번호 입력값 초기화 정책 정리
  - flash cookie 전환 시점에 함께 반영
