### Git Checkout과 HEAD\~1 사용 가이드

---

#### 1. 개념

* **HEAD** : 현재 작업 중인 커밋을 가리키는 포인터
* **HEAD\~1** : 현재 HEAD에서 한 단계 이전 커밋
* **detached HEAD** : 브랜치 이름 없이 특정 커밋을 가리키는 상태

---

#### 2. 직전 커밋으로 이동

```bash
git checkout HEAD~1
```

* 실행 시 터미널에 아래 메시지 표시:

```
Note: switching to 'HEAD~1'.
You are in 'detached HEAD' state...
```

* 한 단계 이전 커밋 시점으로 코드 확인 가능
* 이 상태에서 수정 후 커밋하면 브랜치에 연결되지 않음

---

#### 3. 브랜치로 돌아오기

```bash
git checkout main
# 또는
git switch main
```

* 원래 브랜치로 돌아가 작업 계속 가능

---

#### 4. detached HEAD 상태에서 새 브랜치 만들기

```bash
git checkout -b temp-branch
# 또는
git switch -c temp-branch
```

* 이전 커밋 상태에서 새로운 브랜치 생성
* 안전하게 수정 및 커밋 가능

---

#### 5. 브랜치 자체를 직전 커밋으로 되돌리기 (주의 필요)

```bash
git reset --hard HEAD~1
```

* 브랜치 포인터를 직전 커밋으로 이동
* 이후 커밋은 사라진 것처럼 보임 (복구 가능)

---

#### 6. 협업 환경에서 안전하게 되돌리기

```bash
git revert HEAD
```

* 새로운 커밋을 만들어 이전 커밋 내용을 취소
* 히스토리를 유지하면서 안전하게 수정
