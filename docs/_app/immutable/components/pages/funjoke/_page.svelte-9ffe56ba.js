import {
	S as I,
	i as L,
	s as P,
	k as c,
	q as x,
	a as _,
	l as i,
	m as l,
	r as H,
	h as a,
	c as y,
	n as u,
	b as M,
	D as o,
	B
} from '../../../chunks/index-1aff59f2.js';
function S(r) {
	let e, n, d, g, s, v, E, h, k, p, b, m;
	return {
		c() {
			(e = c('div')),
				(n = c('h1')),
				(d = x('Some random jokes as you click the button')),
				(g = _()),
				(s = c('button')),
				(v = x('Get Joke')),
				(E = _()),
				(h = c('p')),
				(k = _()),
				(p = c('p')),
				(b = _()),
				(m = c('p')),
				this.h();
		},
		l(f) {
			e = i(f, 'DIV', { class: !0 });
			var t = l(e);
			n = i(t, 'H1', {});
			var T = l(n);
			(d = H(T, 'Some random jokes as you click the button')),
				T.forEach(a),
				(g = y(t)),
				(s = i(t, 'BUTTON', { id: !0, type: !0 }));
			var j = l(s);
			(v = H(j, 'Get Joke')),
				j.forEach(a),
				(E = y(t)),
				(h = i(t, 'P', { id: !0 })),
				l(h).forEach(a),
				(k = y(t)),
				(p = i(t, 'P', { id: !0 })),
				l(p).forEach(a),
				(b = y(t)),
				(m = i(t, 'P', { id: !0 })),
				l(m).forEach(a),
				t.forEach(a),
				this.h();
		},
		h() {
			u(s, 'id', 'button'),
				u(s, 'type', 'button'),
				u(h, 'id', 'setup'),
				u(p, 'id', 'punchline'),
				u(m, 'id', 'error'),
				u(e, 'class', 'content svelte-yfv1eq');
		},
		m(f, t) {
			M(f, e, t),
				o(e, n),
				o(n, d),
				o(e, g),
				o(e, s),
				o(s, v),
				o(e, E),
				o(e, h),
				o(e, k),
				o(e, p),
				o(e, b),
				o(e, m);
		},
		p: B,
		i: B,
		o: B,
		d(f) {
			f && a(e);
		}
	};
}
function q(r) {
	const e = document.getElementById('setup'),
		n = document.getElementById('punchline'),
		d = document.getElementById('error');
	(d.innerHTML = ''), (e.innerHTML = r.setup), (n.innerHTML = r.punchline);
}
function J() {
	const r = document.getElementById('error');
	r.innerHTML = 'Whoops, something went wrong. Please try again later!';
}
function w(r) {
	return (
		document.addEventListener('click', function (e) {
			!e.target.matches('#button') ||
				fetch('https://official-joke-api.appspot.com/random_joke')
					.then((n) => n.json())
					.then((n) => q(n))
					.catch(() => J());
		}),
		[]
	);
}
class G extends I {
	constructor(e) {
		super(), L(this, e, w, S, P, {});
	}
}
export { G as default };
