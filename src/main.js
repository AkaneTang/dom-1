//document.createElement('div')
const div = dom.create('<div><span>1</span></div>');
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

// const nodes = dom.empty(window.empty)
// console.log(nodes)

dom.attr(test, 'title', 'hi,I am Akane')
const title = dom.attr(test, 'title')
console.log(`title:${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid blue')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))

const e2 = dom.find('#e2')[0]
console.log(dom.siblings(e2))
console.log(dom.next(e2))
console.log(dom.previous(e2))

const t = dom.find('#travel')[0]        // 返回的是伪数组，取第一个元素才是div
console.log(t)
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(e2))