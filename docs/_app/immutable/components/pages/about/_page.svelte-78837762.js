import {
	S as V,
	i as z,
	s as F,
	a as r,
	k as n,
	q as g,
	I as G,
	h as o,
	c as l,
	l as s,
	m as p,
	r as f,
	n as J,
	b as C,
	D as t,
	B as j
} from '../../../chunks/index-1aff59f2.js';
function K(H) {
	let h, e, c, u, _, v, w, b, d, I, T, k, E, y, x, B, D, P, m, R;
	return {
		c() {
			(h = r()),
				(e = n('div')),
				(c = n('h1')),
				(u = g('A dreamy guy trying to catch a glimse of reasoning...')),
				(_ = r()),
				(v = n('br')),
				(w = n('br')),
				(b = r()),
				(d = n('p')),
				(I = g("I'm Truong Nguyen, a Data Scientist student at Innopolis University")),
				(T = r()),
				(k = n('br')),
				(E = r()),
				(y = n('p')),
				(x = g('Though people may think working with data a lot makes me a rigid guys')),
				(B = r()),
				(D = n('br')),
				(P = r()),
				(m = n('p')),
				(R = g(
					"They are right! That's why I'm trynna find my own way of enjoying every piece of daily life"
				)),
				this.h();
		},
		l(i) {
			G('svelte-1ine71f', document.head).forEach(o), (h = l(i)), (e = s(i, 'DIV', { class: !0 }));
			var a = p(e);
			c = s(a, 'H1', {});
			var A = p(c);
			(u = f(A, 'A dreamy guy trying to catch a glimse of reasoning...')),
				A.forEach(o),
				(_ = l(a)),
				(v = s(a, 'BR', {})),
				(w = s(a, 'BR', {})),
				(b = l(a)),
				(d = s(a, 'P', {}));
			var q = p(d);
			(I = f(q, "I'm Truong Nguyen, a Data Scientist student at Innopolis University")),
				q.forEach(o),
				(T = l(a)),
				(k = s(a, 'BR', {})),
				(E = l(a)),
				(y = s(a, 'P', {}));
			var N = p(y);
			(x = f(N, 'Though people may think working with data a lot makes me a rigid guys')),
				N.forEach(o),
				(B = l(a)),
				(D = s(a, 'BR', {})),
				(P = l(a)),
				(m = s(a, 'P', {}));
			var U = p(m);
			(R = f(
				U,
				"They are right! That's why I'm trynna find my own way of enjoying every piece of daily life"
			)),
				U.forEach(o),
				a.forEach(o),
				this.h();
		},
		h() {
			(document.title = 'About'), J(e, 'class', 'content svelte-1w26jfm');
		},
		m(i, S) {
			C(i, h, S),
				C(i, e, S),
				t(e, c),
				t(c, u),
				t(e, _),
				t(e, v),
				t(e, w),
				t(e, b),
				t(e, d),
				t(d, I),
				t(e, T),
				t(e, k),
				t(e, E),
				t(e, y),
				t(y, x),
				t(e, B),
				t(e, D),
				t(e, P),
				t(e, m),
				t(m, R);
		},
		p: j,
		i: j,
		o: j,
		d(i) {
			i && o(h), i && o(e);
		}
	};
}
class M extends V {
	constructor(h) {
		super(), z(this, h, null, K, F, {});
	}
}
export { M as default };
