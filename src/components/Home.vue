<template>
<div class="background">
  <div class="header">
                <b-img class="fotoHeader" rounded="circle" src="https://i.imgur.com/jktdpNj.png"  alt="Image 1"></b-img>  
                  <b-button style="margin-left: 20px;" variant="light" v-b-modal="'carrinho'">Carrinho</b-button>
  </div>

<div>
  <b-img style="width: 100%; height: 100%; opacity: 0.8;" thumbnail fluid src="https://conteudo.imguol.com.br/c/entretenimento/53/2018/10/08/acai-4-1539021469189_v2_900x506.jpg"  alt="Image 1" ></b-img>
</div>

    <div class="EscolhaSeuProduto">
<h2 style="color: white;"><center>Escolha seu produto clicando nas imagens abaixo ou adicionando normalmente</center></h2>
        </div>
    <b-card class="conteinerMenu">
      <b-row>
        <div class="divFotoMenu">
            <b-col> 
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/HLx0TEb.png"  alt="Image 1" ></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/hkjO7lb.png" alt="Image 2"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/qq6TDKr.png" alt="Image 3"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">    
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/2kXwNs0.png" alt="Image 3"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">  
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/mlHSo9P.png" alt="Image 3"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/mq0MsQ7.png" alt="Image 3"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">          
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/GmeXesY.png" alt="Image 3"></b-img>
            </b-col>
        </div>
        <div class="divFotoMenu">      
            <b-col>
            <b-img class="fotosMenu" v-b-modal="'adicionarproduto'" thumbnail fluid rounded="circle" src="https://i.imgur.com/fpZIDWR.png" alt="Image 3"></b-img>
            </b-col>
        </div>                                                                            
      </b-row>

    </b-card>

<!-- Açaí copo #001 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ COPO 300ML - 700ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#001</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$7.00 - R$15.00</span></div>
   <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/HLx0TEb.png"></div>
  </div>
</div>
<br>

<!-- Açaí + cupuaçu #002 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ + CUPUAÇU 300ML - 700ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#002</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$8.00 - R$16.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/hkjO7lb.png"></div>
  </div>
</div>
<br>

<!-- Açaí Especial Nutella #003 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ ESPECIAL NUTELLA 300ML - 700ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#003</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$8.00 - R$17.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/qq6TDKr.png"></div>
  </div>
</div>
<br>

<!-- Açaí Especial Doce de Leite #004 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ ESPECIAL COM DOCE DE LEITE 300ML - 700ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#004</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$8.00 - R$17.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/2kXwNs0.png"></div>
  </div>
</div>
<br>

<!-- Açaí Especial Creme de Ninho #005 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ ESPECIAL COM CREME DE NINHO 300ML - 700ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#005</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$8.00 - R$17.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/mlHSo9P.png"></div>
  </div>
</div>
<br>

<!-- Açaí Tigela #006 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ TIGELA 300ML - 500ML&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#006</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$8.00 - R$11.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/mq0MsQ7.png"></div>
  </div>
</div>
<br>

<!-- AÇAÍ TAÇA GRANDE #007 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ TAÇA GRANDE &nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#007</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$13.00</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/GmeXesY.png"></div>
  </div>
</div>
<br>

<!-- Açaí BARCA #008 -->
<br>
<div>
  <div class="shadow-sm produto simpleCart_shelfItem" style="background-color: #ffffff; border-radius: 10px;">
  <div style="display: table-cell; vertical-align: top; padding: 10px; width: 100%;">
  <div class="text-uppercase item_name" style="font-size: 1.2rem;"><span><strong>AÇAÍ BARCA 300ML - 1 LITRO&nbsp;</strong><br></span></div>
  <div class="js-produto-id" style="font-size: 0.8rem;"><span>#008</span></div>
  <div style="font-size: 0.8rem;"><span style="font-size: 14px;">Copos de 300ml e 400ml você pode escolher até três acompanhamentos e uma fruta. Copos de 500ml e 700ml podem ser completo.<br></span></div>

  <div class="item_price" style="font-size: 1.2rem;font-weight: bold;margin-bottom: 10px;"><span style="font-size: 22px;">R$17.00 - R$39.90</span></div>
     <b-button class="button-pisca" v-b-modal="'adicionarproduto'">Adicionar</b-button>
  </div>
  <div style="display: table-cell;vertical-align: top;padding: 10px;/*position: relative;*/"><img class="border rounded-circle item_thumb lightbox-imagem" style="border-radius: 10px; object-fit: cover; width: 100px; height: 100px;" src="https://i.imgur.com/fpZIDWR.png"></div>
  </div>
</div>
<br>

<!-- Botão flutuante -->
<div class="fab">
  <button class="main" v-b-modal="'carrinho'">
  </button>
</div>


  <div>
  <!-- The modal -->
  <b-modal size="lg" id="adicionarproduto" title="Monte seu Açaí! Escolha o tipo e os acompanhamentos">

        <template v-slot:modal-footer="{ cancel }">
          <b-button  size="sm" variant="success" v-on:click="adicionarProduto();">
            Adicionar ao carrinho
          </b-button>
          <b-button style="position: absolute;left: 10px;" size="sm" variant="danger" v-on:click="cancel();">
            Fechar
          </b-button>


        </template>
            
            <b-card header-tag="header" class="mb-2">
          <template v-slot:header>
            <h6 class="mb-0">Montagem do Açaí</h6>
          </template>

          <!-- Tipo de açaí -->
          <b-form>
                <div>
                  <b-form-group>
                    <b><p>Escolha o tipo</p></b>
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Copo">Açaí Copo</b-form-radio>
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí + Cupuaçu">Açaí + Cupuaçu</b-form-radio>
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Especial Nutella">Açaí Especial Nutella</b-form-radio>                    
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Especial com Doce de Leite">Açaí Especial com Doce de Leite</b-form-radio>      
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Especial com Creme de Ninho">Açaí Especial com Creme de Ninho</b-form-radio>      
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Tigela">Açaí Tigela</b-form-radio>    
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Taça Grande">Taça Grande</b-form-radio>      
                    <b-form-radio v-model="tipoProdutoSelecionado" name="some-radios" value="Açaí Barca">Açaí Barca</b-form-radio>                                                                                                            
                  </b-form-group>

                  <div class="mt-3">Selected: <strong>{{ tipoProdutoSelecionado }}</strong></div>
                </div>
          </b-form>
          <br />

          <!-- Tamanho do açaí -->
          <b-form>
                <div>
                  <b-form-group>
                    <b><p>Escolha um tamanho</p></b>
                    <b-form-radio v-model="tamanhoProdutoSelecionado" name="some-radios" value="300">300ml</b-form-radio>
                    <b-form-radio v-model="tamanhoProdutoSelecionado" name="some-radios" value="500">500ml</b-form-radio>
                    <b-form-radio v-model="tamanhoProdutoSelecionado" name="some-radios" value="700">700ml</b-form-radio>                    
                    <b-form-radio v-model="tamanhoProdutoSelecionado" name="some-radios" value="1000">1 litro</b-form-radio>                                                                                                          
                  </b-form-group>

                  <div class="mt-3">Selected: <strong>{{ tamanhoProdutoSelecionado }}</strong></div>
                </div>
          </b-form>
          <br />

          <!-- Acompanhamentos do açaí -->
          <b-form>
          <div>
            <b-form-group>
              <b><p>Escolha os acompanhamentos</p></b>
              <b-form-checkbox-group
                id="acompanhamentos"
                v-model="acompanhamentosProdutoSelecionado"
                :options="acompanhamentos"
                name="acompanhamentos"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>


            <div>Selected: <strong>{{ acompanhamentosProdutoSelecionado }}</strong></div>
            </div>
            </b-form>
            <br />

          <!-- Frutas do açaí -->
          <b-form>
          <div>
            <b-form-group>
              <b><p>Escolha as frutas</p></b>
              <b-form-checkbox-group
                id="frutas"
                v-model="frutasProdutoSelecionado"
                :options="frutas"
                name="frutas"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>


            <div>Selected: <strong>{{ frutasProdutoSelecionado }}</strong></div>
            </div>
            </b-form>
            <br />            
  
          <!-- Adicionais pagos -->
          <b-form>
          <div>
            <b-form-group>
              <b><p>Escolha os adicionais pagos (opcional)</p></b>
              <b-form-checkbox-group
                id="adicionaispagos"
                v-model="adicionaisPagosProdutoSelecionado"
                :options="adicionaispagos"
                name="adicionaispagos"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>


            <div>Selected: <strong>{{ adicionaisPagosProdutoSelecionado }}</strong></div>
            </div>
            </b-form>             
            <br />

            <!-- Observações do açaí -->
            <div>
            <b><p>Observações</p></b>          
            <textarea v-model="obsProdutoSelecionado" :maxlength="1000"  rows="4" class="form-control" aria-label="Observações" placeholder="* Informe por aqui, caso tenha adicionais pagos, qual fruta, cobertura ou complemento"></textarea>
            </div>           

            </b-card>

  </b-modal>


 <!-- Modal Carrinho -->
  <b-modal size="lg" id="carrinho" title="Carrinho">

        <template v-slot:modal-footer="{ cancel }">
          <b-button  size="sm" variant="success" v-on:click="adicionarProduto();">
            Adicionar ao carrinho
          </b-button>
          <b-button style="position: absolute;left: 10px;" size="sm" variant="danger" v-on:click="cancel();">
            Fechar
          </b-button>


        </template>
            
            <b-card header-tag="header" class="mb-2">
          <template v-slot:header>
            <h6 class="mb-0">Seu pedido</h6>
          </template>

          <!-- Tabela do carrinho -->
            <table class="tg">
            <thead>
              <tr>
                <th style="font-weight: bold;" class="tg-0lax">Produto</th>
                <th style="font-weight: bold;" class="tg-0lax">Preço</th>
                <th style="font-weight: bold;" class="tg-0lax">Qtd</th>
                <th style="font-weight: bold;" class="tg-0lax">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="carrinho in carrinhos" :key="carrinho.nomeProduto">
                <td class="tg-0lax">{{ carrinho.nomeProduto }}
                  <p><b>Tamanho: </b>
                  {{ carrinho.tam }}</p>
                  <p></p>
                  <p><b>Acompanhamentos:</b>
                  {{ carrinho.acompanhamentos }} </p>
                                    <p></p>       
                  <p><b>Frutas: </b>
                  {{ carrinho.frutas }}</p>
                  <p></p>                  
                  <p><b>Observações:</b>  
                  {{ carrinho.obs }}</p>
                  <p></p>                                                                                               
                </td>
                <td class="tg-0lax">R${{ carrinho.preco }}</td>
                <td class="tg-0lax">{{ carrinho.qtd }}</td>
                <td class="tg-0lax">R${{ carrinho.preco * carrinho.qtd }}</td>
              </tr>
            </tbody>
            </table>          
          <br />
          <div style="right: 120px; position: absolute">
            {{ somarTotal()  }}
          <b>TOTAL: {{ totalcarrinho }}</b>
          </div>          



            <!-- Observações do açaí -->
            <div>
            <b><p>Observações</p></b>          
            <textarea v-model="obsProdutoSelecionado" :maxlength="1000"  rows="4" class="form-control" aria-label="Observações" placeholder="* Informe por aqui, caso tenha adicionais pagos, qual fruta, cobertura ou complemento"></textarea>
            </div>           

            </b-card>

  </b-modal>


</div>
</div>
  
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        tipoProdutoSelecionado: '',
        tamanhoProdutoSelecionado: '',
        acompanhamentosProdutoSelecionado: [],
        frutasProdutoSelecionado: [],  
        adicionaisPagosProdutoSelecionado: [], 
        obsProdutoSelecionado: '',
        totalcarrinho: 0,
        acompanhamentos: [
          { text: 'Leite em pó', value: 'Leite em pó' },
          { text: 'Paçoca', value: 'Paçoca' },
          { text: 'Amendoim', value: 'Amendoim' },
          { text: 'Granola', value: 'Granola' },
          { text: 'Confete', value: 'Confete' },
          { text: 'Ovomaltine', value: 'Ovomaltine' }                    
        ],        
        frutas: [
          { text: 'Banana', value: 'Banana' },
          { text: 'Morango', value: 'Morango' },
          { text: 'Abacaxi', value: 'Abacaxi' },
          { text: 'Kiwi', value: 'Kiwi' },
          { text: 'Manga', value: 'Manga' },
          { text: 'Uva', value: 'Uva' }                    
        ],     
        adicionaispagos: [
          { text: 'Leite em pó +(R$1,50)', value: 'Leite em pó', preco: 1.50 },
          { text: 'Paçoca +(R$1,50)', value: 'Paçoca', preco: 1.50 },
          { text: 'Amendoim +(R$1,50)', value: 'Amendoim', preco: 1.50 },          
          { text: 'Granola +(R$1,50)', value: 'Granola', preco: 1.50 },
          { text: 'Confete +(R$1,50)', value: 'Confete', preco: 1.50 },
          { text: 'Ovomaltine +(R$1,50)', value: 'Ovomaltine', preco: 1.50 },          
          { text: 'Nutella +(R$2,00)', value: 'Nutella', preco: 2.00 },
          { text: 'Creme de Ninho +(R$2,00)', value: 'Creme de Ninho', preco: 2.00 },   
          { text: 'Doce de Leite +(R$2,00)', value: 'Doce de Leite', preco: 2.00 }
        ],
        carrinhos: [
          {nomeProduto: 'AÇAÍ COPO', preco: 8.50, qtd: 1, tipo: 'Acai Copo', tam: '300ml', acompanhamentos:['leite em pó', 'paçoca', 'amendoin'], frutas: ['banana', 'morango'], obs: 'testando obs'},
          {nomeProduto: 'AÇAÍ COPao', preco: 8.00, qtd: 1, tipo: 'Acai Copo', tam: '300ml', acompanhamentos:['leite em pó', 'paçoca', 'amendoin'], frutas: ['banana', 'morango'], obs: 'testando obs'}
        ],
        mini: true,
      }
    },
    methods:{
      adicionarProduto(){        
        alert("Tipo do açaí: " + this.tipoProdutoSelecionado + "\n" +
        "Tamanho do açaí: " + this.tamanhoProdutoSelecionado + "\n" +
        "Acompanhamentos: " + this.acompanhamentosProdutoSelecionado + "\n" +
        "Frutas: " + this.frutasProdutoSelecionado + "\n" +
        "Adicionais Pagos: " + this.adicionaisPagosProdutoSelecionado + "\n" +
        "Observações: " + this.obsProdutoSelecionado + "\n"
        );

        //Limpar dados do produto
        this.tipoProdutoSelecionado = '';
        this.tamanhoProdutoSelecionado = '';
        this.acompanhamentosProdutoSelecionado = [];
        this.frutasProdutoSelecionado = [];
        this.adicionaisPagosProdutoSelecionado = [];
        this.obsProdutoSelecionado = '';
      },
      somarTotal(){
        //console.log(valor);
        var i;
        //var valorTotal;
       for(i=0;i < this.carrinhos.length; i++){
         console.log(this.carrinhos[i].preco);
        //  this.totalcarrinho = this.carrinhos[i].preco + this.totalcarrinho;
       }
      }
    }
  }
</script>

<style scoped>
.fotoHeader{
  width: 70px;
  height: 70px;
}
.EscolhaSeuProduto{
background-color: #303F9E;
}
.header{
  background-color: #E6B412;
}
.divFotoMenu{
  flex: 1 1 150px;
  margin: 5px;
}
.fotosMenu{
  width: 130px;
  height: 130px;
}
.conteinerMenu{
  background-color: #303F9E;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.background{
  background-color: #E6B412;
  width: 100%;
  height: 100%;
}

body{
  font-family: sans-serif;
}

.fab{
  position: fixed;
  bottom:10px;
  right:10px;
}

.fab button{
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 30px;
  background-color: #cb60b3;
  border: none;
  box-shadow: 0 1px 5px rgba(0,0,0,.4);
  font-size: 24px;
  color: white;
    
  -webkit-transition: .2s ease-out;
  -moz-transition: .2s ease-out;
  transition: .2s ease-out;
}

.fab button:focus{
  outline: none;
}

.fab button.main{
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #5b19b7;
  right: 0;
  bottom: 0;
  z-index: 20;
}

.fab button.main:before{
  content: '🛒';
}

.fab ul{
  position:absolute;
  bottom: 0;
  right: 0;
  padding:0;
  padding-right:5px;
  margin:0;
  list-style:none;
  z-index:10;
  
  -webkit-transition: .2s ease-out;
  -moz-transition: .2s ease-out;
  transition: .2s ease-out;
}

.fab ul li{
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-bottom: -10%;
  opacity: 0;
  
  -webkit-transition: .3s ease-out;
  -moz-transition: .3s ease-out;
  transition: .3s ease-out;
}

.fab ul li label{
  margin-right:10px;
  white-space: nowrap;
  display: block;
  margin-top: 10px;
  padding: 5px 8px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  border-radius:3px;
  height: 18px;
  font-size: 16px;
  pointer-events: none;
  opacity:0;
  
  -webkit-transition: .2s ease-out;
  -moz-transition: .2s ease-out;
  transition: .2s ease-out;
}

.fab button.main:active,
.fab button.main:focus{
  outline: none;
  background-color: #7716ff;
  box-shadow: 0 3px 8px rgba(0,0,0,.5);
 }
 
.fab button.main:active:before,
.fab button.main:focus:before{
  content: '🛒';
}

.fab button.main:active + ul,
.fab button.main:focus + ul{
  bottom: 70px;
}

.fab button.main:active + ul li,
.fab button.main:focus + ul li{
  margin-bottom: 10px;
  opacity: 1;
}

.fab button.main:active + ul li:hover label,
.fab button.main:focus + ul li:hover label{
  opacity: 1;
}

.button-pisca {
  background-color: #35b084;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Arial;
  font-size: 14px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
}
@-webkit-keyframes glowing {
  0% { background-color: #35b084; -webkit-box-shadow: 0 0 3px #35b084; }
  50% { background-color: #8BC34A; -webkit-box-shadow: 0 0 3px #8BC34A; }
  100% { background-color: #35b084; -webkit-box-shadow: 0 0 3px #35b084; }
}

@-moz-keyframes glowing {
  0% { background-color: #35b084; -moz-box-shadow: 0 0 3px #35b084; }
  50% { background-color: #8BC34A; -moz-box-shadow: 0 0 3px #8BC34A; }
  100% { background-color: #35b084; -moz-box-shadow: 0 0 3px #35b084; }
}

@-o-keyframes glowing {
  0% { background-color: #35b084; box-shadow: 0 0 3px #35b084; }
  50% { background-color: #8BC34A; box-shadow: 0 0 3px #8BC34A; }
  100% { background-color: #35b084; box-shadow: 0 0 3px #35b084; }
}

@keyframes glowing {
  0% { background-color: #35b084; box-shadow: 0 0 3px #35b084; }
  50% { background-color: #8BC34A; box-shadow: 0 0 3px #8BC34A; }
  100% { background-color: #35b084; box-shadow: 0 0 3px #35b084; }
}

.button-pisca {
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
}

.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}+

tr {
  height: 50px;
}

td {
  width: 90%;
  border:1px solid black;
}
</style>