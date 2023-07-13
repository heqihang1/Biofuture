// 新闻资讯  内容块1
import React from 'react';
import { newsContentText } from "./staticResources";
import './newsInformation.scss';
export default function NewsContext() {
	return (
		<section className='newsContainerContent'>
			<h5 className='newsContainerTitle'>
				<span>{newsContentText.titleEn}</span>
				<span>{newsContentText.titleCn}</span>
			</h5>
			<div className='newsOneConternt'>
				<aside>
					<h6>{newsContentText.sublabel1}<br/>{newsContentText.sublabel2}</h6>
					<article>
						<span>{newsContentText.introduction}</span>
					</article>
				</aside>
				<figure>
					<img src="" alt="" />
				</figure>
			</div>
		</section>
	)
}
