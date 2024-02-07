<template>
	<div>

		<!--education start -->
		<section id="education" class="education anim-education">
			<div class="section-heading text-center">
				<h2>education</h2>
			</div>
			<div class="container">
				<div class="education-horizontal-timeline">
					<div class="row">
						<div class="col-sm-6 p-0">
							<div class="single-horizontal-timeline">
								<div class="experience-time">
									<h2>2019 - 2022</h2>
									<h3>Sofware Engineer</h3>
								</div><!--/.experience-time-->
								<div class="timeline-horizontal-border">
									<font-awesome-icon icon="circle" class="i" aria-hidden="true"></font-awesome-icon>
									<span class="single-timeline-horizontal"></span>
								</div>
								<div class="timeline">
									<div class="timeline-content">
										<h4 class="title">
											Private Higher School of Engineering and
											Technologies (esprit)
										</h4>
									</div><!--/.timeline-content-->
								</div><!--/.timeline-->
							</div>
						</div>
						<div class="col-sm-6  p-0">
							<div class="single-horizontal-timeline">
								<div class="experience-time">
									<h2>2017 - 2019</h2>
									<h3>Preparatory Studies</h3>
								</div><!--/.experience-time-->
								<div class="timeline-horizontal-border">
									<font-awesome-icon icon="circle" class="i" aria-hidden="true"></font-awesome-icon>
									<span class="single-timeline-horizontal"></span>
								</div>
								<div class="timeline">
									<div class="timeline-content">
										<h4 class="title">
											Higher Institute of Preparatory Studies
											in biology and geology

											(ISEPBG)
										</h4>
									</div><!--/.timeline-content-->
								</div><!--/.timeline-->
							</div>
						</div>
					</div>
				</div>
			</div>

		</section><!--/.education-->
		<!--education end -->
	</div>
</template>
<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
	mounted() {
		gsap.registerPlugin(ScrollTrigger);
		const trigger = gsap.timeline({
			scrollTrigger: {
				trigger: '.anim-education',
				start: "top 100%",
				onEnter: () => {
					// play the animation forward
					trigger.play();
				},
			},
		});
		trigger.fromTo(
			'.anim-education',
			{
				opacity: 0,
				y: '30%',
			},
			{
				opacity: 1,
				y: '0%',
				duration: 1, // Adjust the duration as needed
			}
		);
	},
};
</script>
<style scoped>
h1,
h2,
h3,
h4 {
	color: #43485c;
	font-size: 16px !important;
}</style>