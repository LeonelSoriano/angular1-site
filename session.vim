let SessionLoad = 1
if &cp | set nocp | endif
map  h
let s:cpo_save=&cpo
set cpo&vim
map <NL> j
map  k
map  l
map  :NERDTreeToggle
vnoremap <silent>  :update
nnoremap <silent>  :update
onoremap <silent>  :update
map   /
vnoremap <silent> # :call VisualSelection('b')
vnoremap <silent> * :call VisualSelection('f')
map ,pp :setlocal paste!
map ,q :e ~/buffer
noremap ,m mmHmt:%s///ge'tzt'm
map ,s? z=
map ,sa zg
map ,sp [s
map ,sn ]s
map ,ss :setlocal spell!
map ,p :cp
map ,n :cn
map ,co ggVGy:tabnew:set syntax=qfpgg
map ,cc :botright cope
vnoremap <silent> ,r :call VisualSelection('replace')
map ,  :vimgrep // %<Right><Right><Right><Right><Right><Right><Right><Right><Right>
map ,g :vimgrep // **/*.<Left><Left><Left><Left><Left><Left><Left>
map ,cd :cd %:p:h:pwd
map ,te :tabedit =expand("%:p:h")/
map ,tm :tabmove
map ,tc :tabclose
map ,to :tabonly
map ,tn :tabnew
map ,ba :1,1000 bd!
map ,bd :Bclose
map <silent> , :noh
nmap ,w :w!
map 0 ^
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
vnoremap <silent> gv :call VisualSelection('gv')
map j gj
map k gk
nmap mjj <Plug>BookmarkMoveDown
nmap mkk <Plug>BookmarkMoveUp
nmap mx <Plug>BookmarkClearAll
nmap mc <Plug>BookmarkClear
nmap mp <Plug>BookmarkPrev
nmap mn <Plug>BookmarkNext
nmap mi <Plug>BookmarkAnnotate
nmap mm <Plug>BookmarkToggle
nmap ma <Plug>BookmarkShowAll
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nnoremap <silent> <Plug>BookmarkMoveDown :BookmarkMoveDown
nnoremap <silent> <Plug>BookmarkMoveUp :BookmarkMoveUp
nnoremap <silent> <Plug>BookmarkClearAll :BookmarkClearAll
nnoremap <silent> <Plug>BookmarkClear :BookmarkClear
nnoremap <silent> <Plug>BookmarkPrev :BookmarkPrev
nnoremap <silent> <Plug>BookmarkNext :BookmarkNext
nnoremap <silent> <Plug>BookmarkAnnotate :BookmarkAnnotate
nnoremap <silent> <Plug>BookmarkToggle :BookmarkToggle
nnoremap <silent> <Plug>BookmarkShowAll :BookmarkShowAll
map <C-Space> ?
inoremap <silent>  :update
vmap ë :m'<-2`>my`<mzgv`yo`z
vmap ê :m'>+`<my`>mzgv`yo`z
nmap ë mz:m-2`z
nmap ê mz:m+`z
let &cpo=s:cpo_save
unlet s:cpo_save
set autoindent
set autoread
set background=dark
set backspace=eol,start,indent
set balloonexpr=SyntasticBalloonsExprNotifier()
set cmdheight=2
set expandtab
set fileencodings=ucs-bom,utf-8,latin1
set fileformats=unix,dos,mac
set guicursor=n-v-c:block-Cursor/lCursor,ve:ver35-Cursor,o:hor50-Cursor,i-ci:ver25-Cursor/lCursor,r-cr:hor20-Cursor/lCursor,sm:block-Cursor-blinkwait175-blinkoff150-blinkon175,a:blinkon0
set guioptions=agimrLte
set guitablabel=%M\ %t
set helplang=es
set hidden
set history=700
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set lazyredraw
set matchtime=2
set mouse=a
set omnifunc=javascriptcomplete#CompleteJS
set pyxversion=2
set ruler
set runtimepath=~/.vim,~/.vim/bundle/emmet-vim,~/.vim/bundle/nerdtree,~/.vim/bundle/node_modules,~/.vim/bundle/syntastic,~/.vim/bundle/tern_for_vim,~/.vim/bundle/vim-bookmarks,~/.vim/bundle/vim-css-color,/usr/share/vim/vimfiles,/usr/share/vim/vim80,/usr/share/vim/vimfiles/after,~/.vim/bundle/vim-css-color/after,~/.vim/bundle/tern_for_vim/after,~/.vim/after
set scrolloff=7
set shiftwidth=4
set showmatch
set showtabline=2
set smartcase
set smartindent
set smarttab
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l
set noswapfile
set switchbuf=useopen,usetab,newtab
set tabstop=4
set termencoding=utf-8
set textwidth=500
set timeoutlen=500
set viminfo=%,'20,\"50
set whichwrap=b,s,<,>,h,l
set wildignore=*.o,*~,*.pyc
set wildmenu
set window=47
set nowritebackup
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/dev/angular1-site
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +20 app/views/series.html
badd +61 app/scripts/app.js
badd +53 ~/Escritorio/steam.desktop
badd +1 ~/Descargas/Diana\ Judith\ Amateur\ -\ mundo-pack.com.rar
badd +7 ~/dev/git/test-ionic2-login/config.xml
badd +12 README.md
badd +55 app/index.html
badd +31 app/scripts/controllers/series.js
badd +25 bower.json
badd +0 app/scripts/directives/mytableedit.js
argglobal
silent! argdel *
edit app/views/series.html
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
argglobal
let s:cpo_save=&cpo
set cpo&vim
inoremap <buffer> <Plug>(emmet-anchorize-summary) =emmet#util#closePopup()=emmet#anchorizeURL(1)
inoremap <buffer> <Plug>(emmet-anchorize-url) =emmet#util#closePopup()=emmet#anchorizeURL(0)
inoremap <buffer> <Plug>(emmet-remove-tag) =emmet#util#closePopup()=emmet#removeTag()
inoremap <buffer> <Plug>(emmet-split-join-tag) :call emmet#splitJoinTag()
inoremap <buffer> <Plug>(emmet-toggle-comment) =emmet#util#closePopup()=emmet#toggleComment()
inoremap <buffer> <Plug>(emmet-image-size) =emmet#util#closePopup()=emmet#imageSize()
inoremap <buffer> <Plug>(emmet-move-prev-item) :call emmet#moveNextPrevItem(1)
inoremap <buffer> <Plug>(emmet-move-next-item) :call emmet#moveNextPrevItem(0)
inoremap <buffer> <Plug>(emmet-move-prev) :call emmet#moveNextPrev(1)
inoremap <buffer> <Plug>(emmet-move-next) :call emmet#moveNextPrev(0)
inoremap <buffer> <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-1)
inoremap <buffer> <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(1)
inoremap <buffer> <Plug>(emmet-update-tag) =emmet#util#closePopup()=emmet#updateTag()
inoremap <buffer> <Plug>(emmet-expand-word) =emmet#util#closePopup()=emmet#expandAbbr(1,"")
inoremap <buffer> <Plug>(emmet-expand-abbr) =emmet#util#closePopup()=emmet#expandAbbr(0,"")
vmap <buffer> c <Plug>(emmet-code-pretty)
vmap <buffer> m <Plug>(emmet-merge-lines)
nmap <buffer> A <Plug>(emmet-anchorize-summary)
nmap <buffer> a <Plug>(emmet-anchorize-url)
nmap <buffer> k <Plug>(emmet-remove-tag)
nmap <buffer> j <Plug>(emmet-split-join-tag)
nmap <buffer> / <Plug>(emmet-toggle-comment)
nmap <buffer> i <Plug>(emmet-image-size)
nmap <buffer> N <Plug>(emmet-move-prev)
nmap <buffer> n <Plug>(emmet-move-next)
vmap <buffer> D <Plug>(emmet-balance-tag-outword)
nmap <buffer> D <Plug>(emmet-balance-tag-outword)
vmap <buffer> d <Plug>(emmet-balance-tag-inward)
nmap <buffer> d <Plug>(emmet-balance-tag-inward)
nmap <buffer> u <Plug>(emmet-update-tag)
nmap <buffer> ; <Plug>(emmet-expand-word)
vmap <buffer> , <Plug>(emmet-expand-abbr)
nmap <buffer> , <Plug>(emmet-expand-abbr)
vnoremap <buffer> <Plug>(emmet-code-pretty) :call emmet#codePretty()
vnoremap <buffer> <Plug>(emmet-merge-lines) :call emmet#mergeLines()
nnoremap <buffer> <Plug>(emmet-anchorize-summary) :call emmet#anchorizeURL(1)
nnoremap <buffer> <Plug>(emmet-anchorize-url) :call emmet#anchorizeURL(0)
nnoremap <buffer> <Plug>(emmet-remove-tag) :call emmet#removeTag()
nnoremap <buffer> <Plug>(emmet-split-join-tag) :call emmet#splitJoinTag()
nnoremap <buffer> <Plug>(emmet-toggle-comment) :call emmet#toggleComment()
nnoremap <buffer> <Plug>(emmet-image-size) :call emmet#imageSize()
nnoremap <buffer> <Plug>(emmet-move-prev-item) :call emmet#moveNextPrevItem(1)
nnoremap <buffer> <Plug>(emmet-move-next-item) :call emmet#moveNextPrevItem(0)
nnoremap <buffer> <Plug>(emmet-move-prev) :call emmet#moveNextPrev(1)
nnoremap <buffer> <Plug>(emmet-move-next) :call emmet#moveNextPrev(0)
vnoremap <buffer> <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-2)
nnoremap <buffer> <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-1)
vnoremap <buffer> <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(2)
nnoremap <buffer> <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(1)
nnoremap <buffer> <Plug>(emmet-update-tag) :call emmet#updateTag()
nnoremap <buffer> <Plug>(emmet-expand-word) :call emmet#expandAbbr(1,"")
vnoremap <buffer> <Plug>(emmet-expand-abbr) :call emmet#expandAbbr(2,"")
nnoremap <buffer> <Plug>(emmet-expand-abbr) :call emmet#expandAbbr(3,"")
imap <buffer> A <Plug>(emmet-anchorize-summary)
imap <buffer> a <Plug>(emmet-anchorize-url)
imap <buffer> k <Plug>(emmet-remove-tag)
imap <buffer> j <Plug>(emmet-split-join-tag)
imap <buffer> / <Plug>(emmet-toggle-comment)
imap <buffer> i <Plug>(emmet-image-size)
imap <buffer> N <Plug>(emmet-move-prev)
imap <buffer> n <Plug>(emmet-move-next)
imap <buffer> D <Plug>(emmet-balance-tag-outword)
imap <buffer> d <Plug>(emmet-balance-tag-inward)
imap <buffer> u <Plug>(emmet-update-tag)
imap <buffer> ; <Plug>(emmet-expand-word)
imap <buffer> , <Plug>(emmet-expand-abbr)
let &cpo=s:cpo_save
unlet s:cpo_save
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=s:<!--,m:\ \ \ \ ,e:-->
setlocal commentstring=<!--%s-->
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'html'
setlocal filetype=html
endif
setlocal fixendofline
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal formatprg=
setlocal grepprg=
setlocal iminsert=0
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=HtmlIndent()
setlocal indentkeys=o,O,<Return>,<>>,{,},!^F
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
set linebreak
setlocal linebreak
setlocal nolisp
setlocal lispwords=
setlocal nolist
setlocal makeencoding=
setlocal makeprg=
setlocal matchpairs=(:),{:},[:],<:>
setlocal modeline
setlocal modifiable
setlocal nrformats=bin,octal,hex
set number
setlocal number
setlocal numberwidth=4
setlocal omnifunc=htmlcomplete#CompleteTags
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal signcolumn=auto
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'html'
setlocal syntax=html
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tags=
setlocal textwidth=500
setlocal thesaurus=
setlocal noundofile
setlocal undolevels=-123456
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 37 - ((27 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
37
normal! 060|
tabedit app/scripts/directives/mytableedit.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=sO:*\ -,mO:*\ \ ,exO:*/,s1:/*,mb:*,ex:*/,://
setlocal commentstring=//%s
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal fixendofline
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=croql
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal formatprg=
setlocal grepprg=
setlocal iminsert=0
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=GetJavascriptIndent()
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e,0],0)
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
set linebreak
setlocal linebreak
setlocal nolisp
setlocal lispwords=
setlocal nolist
setlocal makeencoding=
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal modifiable
setlocal nrformats=bin,octal,hex
set number
setlocal number
setlocal numberwidth=4
setlocal omnifunc=javascriptcomplete#CompleteJS
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal signcolumn=auto
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tags=
setlocal textwidth=500
setlocal thesaurus=
setlocal noundofile
setlocal undolevels=-123456
setlocal nowinfixheight
setlocal nowinfixwidth
setlocal wrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 179 - ((13 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
179
normal! 073|
tabnext 1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
