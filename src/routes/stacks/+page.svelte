<script>
	export const page = 'STACKS';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { fly } from 'svelte/transition';
	import '../../styles/index';
	import Stack from '$lib/components/Stack.svelte';
</script>

<svelte:head>
	<title>Stacks - PatrickChoDev</title>
</svelte:head>

<div
	in:fly|global={{ y: -50, duration: 500, delay: 500 }}
	out:fly|global={{ y: 50, duration: 500 }}
>
	<PageHeader
		title="Technology Stacks"
		sub="Language, Stacks, Tools, Framework, Collaborative Tools that I prefer to use"
		supersub="Updated Jan, 2025"
	/>
	<div class="stacks">
		<h4>Programming Languages</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
				alt="Rust"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
				alt="TypeScript"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
				alt="Go"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
				alt="Python"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
				alt="Java"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
				alt="Swift"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
				alt="Kotlin"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
				alt="Dart"
			/>
		</div>

		<h4>Frontend & Web Technologies</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
				alt="Next.js"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original.svg"
				alt="SolidJS"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
				alt="Svelte"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
				alt="Webpack"
			/>
		</div>

		<h4>Cloud & Infrastructure</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
				alt="Docker"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
				alt="Kubernetes"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
				alt="Google Cloud Platform"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
				alt="Amazon Web Services"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg"
				alt="ArgoCD"
			/>
			<Stack
				img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flux_color_logo.png/1599px-Flux_color_logo.png"
				alt="FluxCD"
			/>
			<Stack
				img_src="https://raw.githubusercontent.com/cncf/artwork/refs/heads/main/projects/istio/icon/color/istio-icon-color.svg"
				alt="Istio"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"
				alt="Terraform"
			/>
		</div>

		<h4>Databases & Messaging</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
				alt="Redis"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
				alt="PostgreSQL"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg"
				alt="Neo4j"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
				alt="MongoDB"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg"
				alt="Apache Cassandra"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg"
				alt="Elasticsearch"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"
				alt="Apache Kafka"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"
				alt="RabbitMQ"
			/>
		</div>

		<h4>Build Tools & Development</h4>
		<div class="category">
			<Stack
				img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bazel_logo.svg/1024px-Bazel_logo.svg.png"
				alt="Bazel"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg"
				alt="CMake"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"
				alt="Gradle"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-plain.svg"
				alt="gRPC"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg"
				alt="Deno"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vault/vault-original.svg"
				alt="HashiCorp Vault"
			/>
		</div>

		<h4>Mobile & Desktop</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
				alt="Android"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
				alt="Flutter"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg"
				alt="Tauri"
			/>
		</div>

		<h4>Other Tools</h4>
		<div class="category">
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opentelemetry/opentelemetry-original.svg"
				alt="OpenTelemetry"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
				alt="MATLAB"
			/>
			<Stack
				img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
				alt="Linux"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	div {
		flex: 1;
		display: flex;
		flex-direction: column;

		div.stacks {
			margin: auto;
			width: 80%;

			h4 {
				width: 100%;
				text-align: center;
				font-weight: 300;
				font-size: 1.2rem;
				margin: 5rem 0 1rem 0;

				&:first-of-type {
					margin-top: 1rem;
				}

				&:before,
				&:after {
					content: '';
					flex: 1;
					height: 1px;
					border-bottom: 2px solid #000;
					margin: auto;
				}
			}

			.category {
				margin: auto;
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				gap: 1rem;
			}
		}
	}
</style>
