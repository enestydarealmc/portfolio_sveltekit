import {
	S as E,
	i as k,
	s as B,
	k as o,
	q,
	a as g,
	l as n,
	m,
	r as A,
	h as f,
	c as y,
	n as s,
	b as D,
	D as a,
	B as b
} from '../../../chunks/index-1aff59f2.js';
function F(x) {
	let e, l, u, p, i, v, _, r, d, c;
	return {
		c() {
			(e = o('div')),
				(l = o('h2')),
				(u = q('Feel free to reach me at any of these portals')),
				(p = g()),
				(i = o('br')),
				(v = o('br')),
				(_ = g()),
				(r = o('a')),
				(d = g()),
				(c = o('a')),
				this.h();
		},
		l(h) {
			e = n(h, 'DIV', { class: !0 });
			var t = m(e);
			l = n(t, 'H2', { class: !0 });
			var w = m(l);
			(u = A(w, 'Feel free to reach me at any of these portals')),
				w.forEach(f),
				(p = y(t)),
				(i = n(t, 'BR', { class: !0 })),
				(v = n(t, 'BR', { class: !0 })),
				(_ = y(t)),
				(r = n(t, 'A', { href: !0, class: !0 })),
				m(r).forEach(f),
				(d = y(t)),
				(c = n(t, 'A', { href: !0, class: !0 })),
				m(c).forEach(f),
				t.forEach(f),
				this.h();
		},
		h() {
			s(l, 'class', 'svelte-c9h4tv'),
				s(i, 'class', 'svelte-c9h4tv'),
				s(v, 'class', 'svelte-c9h4tv'),
				s(r, 'href', 'https://www.facebook.com/nguyensontruong2408'),
				s(r, 'class', 'fa fa-facebook svelte-c9h4tv'),
				s(c, 'href', 'https://www.instagram.com/enestydarealmc/'),
				s(c, 'class', 'fa fa-instagram svelte-c9h4tv'),
				s(e, 'class', 'content svelte-c9h4tv');
		},
		m(h, t) {
			D(h, e, t), a(e, l), a(l, u), a(e, p), a(e, i), a(e, v), a(e, _), a(e, r), a(e, d), a(e, c);
		},
		p: b,
		i: b,
		o: b,
		d(h) {
			h && f(e);
		}
	};
}
class S extends E {
	constructor(e) {
		super(), k(this, e, null, F, B, {});
	}
}
export { S as default };
