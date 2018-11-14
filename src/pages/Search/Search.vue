<!--  -->
<template>
  <div class="test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.test {
  height: 30px;
  margin-top: 100px;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;

  li {
    width: 50px;
    height: 30px;
    display: inline-block;
  }
}
</style>