# TortoiseDesign
维护一个组件库



## 项目需求

化繁为简，从简单入手，在需求中慢慢复杂

- 代码结构
- 样式解决方案
- 组件需求分析代码
- 组件测试用例分析和编码
- 代码打包输出和发布
- CI/CD 文档生成



## 设计色彩体系

- 系统色板 = 基础色板 + 中性色板
- 产品色板 = 品牌色 + 功能色板



## 组件库样式变量分类

- 基本色彩系统
- 字体系统
- 表单
- 按钮
- 边框和阴影
- 可配置开关



## Button 组件



## 组件测试

**测试的好处：**

- 有利于产生高质量的代码，机器测试的比手动测试的更准确
- 更早发现bug，避免线上事故造成不可逆转的损失
- 让重构和升级变得更加容易和可靠
- 让开发流程更加敏捷，避免手动创建各种不同类型的组件



**react组件适合单元测试：**

- Component - 组件
- Function - 函数
- 单项数据流



**Button组件测试：**

```typescript
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType} from "./button";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'test'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg test')
  })
  it('should render a link when btnType equals link and href', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
```



## Alert 组件



## Menu 组件

已完成部分：

- Menu组件
- MenuItem组件
- SubMenu组件



待优化部分：

- 添加ItemGroup
- SubMenu收缩动画添加



## Icon 组件

这里主要封装了[Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)



## Transition 组件

这里主要封装了[React Transition Group](https://reactcommunity.org/react-transition-group/)
