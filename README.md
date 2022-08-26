# solid-in-js

### S.O.L.I.D. principles explained in JS using an accordion based static site

1. Single Repsonsibility
2. Open-Closed
3. Liskov Substitution
4. Interface Saggrigation
5. Dependency Invversion

### Site built using:

1. AWS S3 Static site hosting + Route53
2. Google Domain
3. Github Repo

### Technical Specs:

1. TypeScript
2. Webpack with common config
3. Accordion

### Common commands to remember:

1. Sync command to upload bundle files to S3 using S3 cli:

```
aws s3 sync . s3://solid-in-js.sujitsingh.in --delete
```
