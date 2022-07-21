<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)
const router = useRouter()
const a = {
  a: 1,
  b: 2,
}
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
useRequest(getWikiList, {
  onSuccess: (res) => {
    console.log('🚀 ~ file: index.vue ~ line 18 ~ res', res)
  },
  onError: (err) => {
    console.log(err)
  },
})
const val = ref('')
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-button>中文</el-button>
      <el-button type="primary">
        搜索
      </el-button>
      <el-input v-model="val" />
    </div>
    <element-demo />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
