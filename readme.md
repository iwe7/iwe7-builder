### builders

#### builders.nestjs
> 用angular/cli编译nestjs应用

- 新建module
```
ng g lib iwe8-core
```

- 修改配置angular.json

```json
"iwe8-core": {
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
ng run iwe8-core:build
```
