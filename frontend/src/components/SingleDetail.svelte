<script lang="ts">
    interface Props {
        name: string;
        value: string;
    }

    let { name, value }: Props = $props();
</script>

<div class="singleDetail">
    <b>{name}</b> {value}
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=Eczar:800|Roboto+Condensed|Tauri|Teko:500|Changa+One|Gelasio|DM+Serif+Text:400i&display=swap');
    .singleDetail {
        font-family: 'Century Gothic';
    }
</style>