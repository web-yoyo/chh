<template>
  <div class="music-card">
    <div class="player" @click="clickPoster()">
      <div class="lead-icon" :class="{ 'lead-active': playing }"></div>
      <div class="rotate-block" :class="{ start: startAudio, active: playing, pause: !playing }">
        <img :src="musicData.picurl" />
      </div>
      <div v-if="!playing" class="pause-icon"></div>
    </div>
    <div class="title">{{ musicData.name }}</div>
    <div class="author">{{ musicData.artistsname }}</div>

    <component
      :is="musicData.url && AudioLine"
      :url="musicData.url"
      :playing="playing"
      @on-audio-state="onAudioState"
    />

    <component :is="!loading && RefreshCard" />
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, toRefs, onMounted, watch, computed } from 'vue'
  import { fetchRandMusic } from '/@/api/service'
  import { HomeHooksModel } from '/@/model/HomeModel'
  import AudioLine from '@/components/audio-line/AudioLine.vue'
  import RefreshCard from '@/components/refreshcard/RefreshCard.vue'
  import { Toast } from 'vant'
  import { refreshStore } from '/@/stores/index'
  const musicIndex = reactive<HomeHooksModel>({
    musicData: {},
    noData: false,
    loading: true,
  })

  const { musicData, loading } = toRefs(musicIndex)

  const playing = ref(false)
  const startAudio = ref(false)

  onMounted(() => {
    fetchMusicInfo()
  })
  // 查询随机音乐信息
  const fetchMusicInfo = async () => {
    const { data } = await fetchRandMusic()
    musicIndex.loading = false
    // indexRec.noData = data.code !== 1
    musicIndex.musicData = data.data
    console.log(musicIndex, 'musicIndex')
  }

  // 点击海报区域
  const clickPoster = () => {
    startAudio.value = true
    playing.value = !playing.value
  }

  // 监听音乐状态
  const onAudioState = (audioState: number) => {
    startAudio.value = true
    playing.value = audioState === 1 ? true : false
    audioState === -1 ? Toast('播放链接不存在！') : ''
    audioState === 2 ? fetchMusicInfo() : ''
  }

  // 引入store模块
  const refresher = refreshStore()
  watch(
    computed(() => {
      // 接收store，返回ref对象，并监听
      return refresher.refreshNum
    }),
    (newVal, oldVal) => {
      // 监听值变化，刷新数据
      if (newVal === oldVal) return
      retryData()
    },
  )

  // 重新加载数据
  const retryData = () => {
    fetchMusicInfo()
  }

  toRefs(musicIndex)
</script>
<style scoped lang="scss">
  .music-card {
    .player {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .start {
        animation: player-rotate 10s linear infinite;
      }
      .active {
        animation-play-state: running !important;
      }
      .pause {
        animation-play-state: paused !important;
      }
      .rotate-block {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('@/assets/img/audio-bg.png') no-repeat;
        background-size: contain;
        position: relative;
        &:before {
          content: ' ';
          top: 0;
          left: 0;
          width: 200px;
          height: 200px;
          position: absolute;
          z-index: 10;
          background: url('@/assets/img/audio-bg-light.png') no-repeat;
          background-size: contain;
        }

        img {
          width: 125px;
          height: 125px;
          object-fit: cover;
          border-radius: 100%;
          background: #f8f8f8;
        }
      }
      .pause-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 15;
        background: url('@/assets/img/pause.png') no-repeat;
        background-size: contain;
      }
      .lead-active {
        transform: rotate(-7deg) !important;
      }
      .lead-icon {
        position: absolute;
        width: 60px;
        height: 96px;
        top: -30px;
        right: 125px;
        transition: 1s;
        transform: rotate(-30deg);
        transform-origin: left top;
        background: url('@/assets/img/needle.png') no-repeat;
        background-size: contain;
        z-index: 20;
      }
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #000;
      margin-top: 25px;
      text-align: center;
    }
    .author {
      font-size: 12px;
      color: #818894;
      margin-top: 10px;
      margin-bottom: 50px;
      text-align: center;
    }
  }
  @keyframes player-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
