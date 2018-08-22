### builders

#### builders.nestjs
> 用angular/cli编译nestjs应用

- 配置angular.json

```json
"modulename": {
    "root": "projects/iwe8-core",
    "projectType": "library",
    "architect": {
    "build": {
        "builder": "iwe7-builder:nestjs",
        "options": {
        "tsConfig": "projects/iwe8-core/tsconfig.lib.json"
        }
    }
    }
},
```
- 运行
```
ng run modulename:build
```
