This is a plugin for `botpress-platform-webchat` that gives you ability to use date picker
that allows to choose from provided slots.

# Usage

1. Install package to your botpress-generated bot
2. Add content of `@botpress-webchat-plugin-calendar` type (see example below)

```yml
- type: '@botpress-webchat-plugin-calendar'
  text: 'Select date!'
  data:
    slots:
      - 01/02/18 11:00 AM
      - 01/02/18 11:30 AM
      - 01/02/18 11:50 AM
```
