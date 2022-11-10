<template>
	<main>
		<div class="loading-page" v-if="loading">
			<div class="preloading-text-about-top">
				<div class="about-text" v-for="(preLoadItem, index) in preLoadItems" :key="index">
					<div class="array">
						<p :id="preLoadItem.id_aka" class="aka">{{ preLoadItem.aka }}</p>
						<p :id="preLoadItem.id_dash" class="dash">{{ preLoadItem.dash }}</p>
						<p :id="preLoadItem.id_name" class="name">{{ preLoadItem.name }}</p>
						<p :id="preLoadItem.id_lastname" class="lastname">{{ preLoadItem.lastname }}</p>
						<p :id="preLoadItem.id_dir" class="dir">{{ preLoadItem.dir }}</p>
						<p :id="preLoadItem.id_cgi" class="cgi">{{ preLoadItem.cgi }}</p>
					</div>
				</div>
			</div>
			<div class="preloading-text">
				<p class="op-1">Preloading</p>
				<p class="op-4">Preloading</p>
				<p class="op-3">Preloading</p>
				<p class="op-2">Preloading</p>
			</div>
			<div class="preloading-text-about-buttom">
				<div class="about-text" v-for="(preLoadItem, index) in preLoadItems" :key="index">
					<div class="array">
						<p :id="preLoadItem.id_aka" class="aka">{{ preLoadItem.aka }}</p>
						<p :id="preLoadItem.id_dash" class="dash">{{ preLoadItem.dash }}</p>
						<p :id="preLoadItem.id_name" class="name">{{ preLoadItem.name }}</p>
						<p :id="preLoadItem.id_lastname" class="lastname">{{ preLoadItem.lastname }}</p>
						<p :id="preLoadItem.id_dir" class="dir">{{ preLoadItem.dir }}</p>
						<p :id="preLoadItem.id_cgi" class="cgi">{{ preLoadItem.cgi }}</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
  
<script>
export default {
	props: {
		preLoadItems: {
			type: Array,
			default: () => [
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// TWO ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// FOUR ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// TWO ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// 8 ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// TWO ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// FOUR ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// TWO ROWS
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				{
					id_aka: "aka",
					id_dash: "dash",
					id_name: "name",
					id_lastname: "lastname",
					id_dir: "dir",
					id_cgi: "cgi",
					aka: "HARDLAIT",
					dash: "-",
					name: "NIKOLAS",
					lastname: "ARDELEY",
					dir: "DIRECTOR",
					cgi: "CGI",
				},
				// 8 ROWS
			],
		},
	},
	data: () => ({
		loading: false
	}),
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		}
	}
}
</script>
  
<style lang="postcss" scoped>
@keyframes op-1 {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes op-2 {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}


	to {
		opacity: 1;
	}
}

@keyframes op-3 {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}


	to {
		opacity: 1;
	}
}

@keyframes op-4 {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}


	to {
		opacity: 1;
	}
}






.loading-page {
	display: flex !important;
	align-items: center !important;
	justify-content: space-between !important;
	background-color: var(--bg) !important;
	z-index: 100 !important;
	width: 100vw !important;
	height: 100vh !important;
	flex-direction: column !important;
	position: unset !important;
	top: unset !important;
	left: unset !important;
	text-align: unset !important;
	padding-top: unset !important;
	font-size: unset !important;
	font-family: 'On Diatype Standard' !important;

	& .preloading-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		padding: .5rem;

		& p {
			margin-top: 0;
		}
	}

	& .preloading-text {

		& p:nth-child(1) {
			animation: op-1 300ms;
			animation-iteration-count: 2;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}

	& .preloading-text {

		& p:nth-child(2) {
			animation: op-2 300ms;
			animation-iteration-count: 2;
			animation-delay: 100ms;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}

	& .preloading-text {

		& p:nth-child(4) {
			animation: op-3 300ms;
			animation-iteration-count: 2;
			animation-delay: 200ms;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}

	& .preloading-text {

		& p:nth-child(3) {
			animation: op-4 300ms;
			animation-iteration-count: 2;
			animation-delay: 300ms;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}


	& .preloading-text-about-top,
	& .preloading-text-about-buttom {
		width: 100vw;
		padding: .5rem;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		overflow-x: hidden;
		max-width: 100%;

		& .about-text {

			display: inline-flex;
			white-space: nowrap;

			& .array {
				display: inline-flex;
				visibility: hidden;

				& p {
					margin-top: 0;
					margin-right: .5rem;
				}
			}



			/* & p:nth-child(2n+0) {}

			& p:nth-child(3n+0) {}

			& p:nth-child(4n+0) {}

			& p:nth-child(5n+0) {}

			& p:nth-child(6n+0) {} */
		}

	}


}


.loading-page {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-primary);
	text-align: center;
	padding-top: 200px;
	font-size: 30px;
	font-family: sans-serif;
	z-index: 100;
}

@media only screen and (max-width: 768px) {
	.loading-page {
		display: flex !important;
		align-items: center !important;
		justify-content: space-between !important;
		background-color: var(--bg) !important;
		z-index: 100 !important;
		width: 100vw !important;
		height: 100vh !important;
		flex-direction: column !important;
		position: unset !important;
		top: unset !important;
		left: unset !important;
		text-align: unset !important;
		padding-top: unset !important;
		font-size: unset !important;
		font-family: 'On Diatype Standard' !important;

		& .preloading-text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100vw;
			padding: .5rem;

			& p {
				margin-top: 0;
			}
		}

		& .preloading-text {

			& p:nth-child(1) {
				animation: op-1 300ms;
				animation-iteration-count: 2;
				animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}

		& .preloading-text {

			& p:nth-child(2) {
				animation: op-2 300ms;
				animation-iteration-count: 2;
				animation-delay: 100ms;
				animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}

		& .preloading-text {

			& p:nth-child(4) {
				display: none;
			}
		}

		& .preloading-text {

			& p:nth-child(3) {
				display: none;
			}
		}


		& .preloading-text-about-top,
		& .preloading-text-about-buttom {
			width: 100vw;
			padding: .5rem;
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			overflow-x: hidden;
			max-width: 100%;

			& .about-text {

				display: inline-flex;
				white-space: nowrap;

				& .array {
					display: inline-flex;
					visibility: hidden;

					& p {
						margin-top: 0;
						margin-right: .5rem;
					}
				}



				/* & p:nth-child(2n+0) {}

			& p:nth-child(3n+0) {}

			& p:nth-child(4n+0) {}

			& p:nth-child(5n+0) {}

			& p:nth-child(6n+0) {} */
			}

		}


	}
}
</style>