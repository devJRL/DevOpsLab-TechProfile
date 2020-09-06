# Git Flow Command

## 규칙

1. 각 [프로젝트](https://github.com/SP-ON-GE/DevOpsLab-TechProfile/projects)의 `To do tickets` 컬럼에서 티켓을 생성한다. 이 티켓의 이름은 향후 개발에서 사용되므로 영문으로 작성한다.

   - [`SSR | Next.js + Zeplin`](https://github.com/SP-ON-GE/DevOpsLab-TechProfile/projects/1#column-10717775)

1. 개발에 착수할 티켓을 선택하여 `In progress` 컬럼으로 옮기면 해당 기능 개발을 시작한다. 기능개발은 `develop` 브랜치에서 출발하며, `feature` 브랜치를 찢어낸 뒤 진행한다. `feature 브랜치의 이름은 티켓 이름으로 생성한다.`

    ```bash
    git checkout -b develop
    git flow feature start <ticket_name>
    ```

1. 기능 개발 중에 필요한 내용들을 커밋하여 반영한다.

    ```bash
    git add .
    git commit -m "commit message"
    ```

1. 개발이 완료되면 해당 개발을 완료시킨다. 완료시킨 기능이 `develop` 브랜치에 병합된다.

    ```bash
    git flow feature finish <ticket_name>
    ```
