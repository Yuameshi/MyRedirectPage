window.addEventListener('load', function() {
	if(typeof URL !== 'function') {
		this.setTimeout(function() {
			location.href = 'https://www.yuameshi.top/';
		}, 5000);
		return;
	}
	const accessURL = new URL(location.href);
	const params = new URLSearchParams(accessURL.search);
	const domain = (params.get('host') || '');
	const path = params.get('path') || '';
	const url = 'https://'+domain+'yuameshi.top/'+path;
	document.querySelector('div#detectDomain').innerHTML=
	'检测到您的原始访问路径为：https://<font color="yellow">'+domain+'</font>han-han.xyz<font color="yellow">'+path+'</font><br/>'+
	'将为您重定向到定向到<a href="'+url+'">https://<font color="yellow">'+domain+'</font>yuameshi.top<font color="yellow">'+path+'</font></a>';
	this.setTimeout(function() {
		location.href = url;
	}, 5000);
});
